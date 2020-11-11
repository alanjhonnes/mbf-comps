import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'sf-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;

  @Input() chartLabels: Label[];
  @Input() chartTooltipText: Array<string[]>;
  @Input() chartData: number[];

  public chartType: ChartType;
  public chartLegend: boolean;
  public chartPlugins: [];
  public chartDataSets: ChartDataSets[];
  public chartOptions: ChartOptions;
  public chartColors: Color[];

  constructor() {
    this.chartType = 'bar';
    this.chartLegend = false;
    this.chartPlugins = [];
    this.chartColors = [];
    this.loadChart();
  }

  ngOnInit(): void {
    this.loadChartDataSet();
    this.loadColors();
  }

  ngOnChanges(): void {
    this.loadChartDataSet();
  }

  loadChartDataSet() {
    this.chartDataSets = [
      {
        data: this.chartData,
        barThickness: 8,
      },
    ];
  }

  loadColors() {
    const ctx = this.chart.nativeElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);

    gradient.addColorStop(0, '#7495B8');
    gradient.addColorStop(1, '#00002D');

    this.chartColors = [
      {
        borderColor: '#E0E0E0',
        backgroundColor: '#E0E0E0',
        hoverBackgroundColor: gradient
      }
    ];
  }

  loadChart() {
    this.chartOptions = {
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontFamily: 'Montserrat',
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            display: false,
          },
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1,
          },
        }],
      },
      tooltips: {
        intersect: false,
        displayColors: false,
        backgroundColor: '#2A2A5C',
        xPadding: 8,
        yPadding: 8,
        titleFontStyle: '700',
        titleFontSize: 12,
        titleSpacing: 14,
        titleFontFamily: 'Montserrat',
        bodyFontSize: 12,
        bodyFontStyle: '400',
        bodySpacing: 5,
        bodyFontFamily: 'Montserrat',
        callbacks: {
          title: (items) => {
            return (new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            })).format(parseFloat(`${items[0].value}`));
          },
          label: (item) => {
            const index = item.index || 0;
            return this.chartTooltipText[index];
          }
        },
        axis: 'x'
      },
      hover: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
    };

    Chart.controllers.bar.prototype.draw = function () {
      const meta = this.getMeta();

      meta.data.forEach((bar: any) => {
        const view = bar._view;
        const ctx = this.chart.ctx;
        const cornerRadius = 10;

        // Properties of bar.
        var left, right, top, bottom, radius;
        left = view.x - view.width / 2;
        right = view.x + view.width / 2;
        top = view.y;
        bottom = view.base;

        ctx.beginPath();
        ctx.fillStyle = view.backgroundColor;
        ctx.strokeStyle = view.borderColor;

        // Corner points, init from bottom-left, clockwise.
        const corners = [
          [left, bottom],
          [left, top],
          [right, top],
          [right, bottom]
        ];

        function cornerAt(index: number) {
          return corners[(index) % 4];
        }

        // Draw initial rectangle.
        var corner = cornerAt(0);
        ctx.moveTo(corner[0], corner[1]);

        for (var i = 1; i < 4; i++) {
          corner = cornerAt(i);

          var nextCornerId = i + 1;
          if (nextCornerId == 4) {
            nextCornerId = 0
          }

          const width = corners[2][0] - corners[1][0];
          const height = corners[0][1] - corners[1][1];
          const x = corners[1][0];
          const y = corners[1][1];

          radius = cornerRadius;

          // Fix radius being too large.
          if (radius > height / 2) {
            radius = height / 2;
          } if (radius > width / 2) {
            radius = width / 2;
          }

          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height);
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          ctx.lineTo(x, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
        }

        ctx.fill();
      });
    }
  }
}