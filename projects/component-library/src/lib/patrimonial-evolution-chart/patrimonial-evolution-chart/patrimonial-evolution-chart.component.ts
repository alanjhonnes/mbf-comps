import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import Chart, { ChartTooltipItem } from 'chart.js';
import { CurrencyUtil } from './currency-util';

@Component({
  selector: 'sf-patrimonial-evolution-chart',
  templateUrl: './patrimonial-evolution-chart.component.html',
  styleUrls: ['./patrimonial-evolution-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatrimonialEvolutionChartComponent
  implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  canvas: ElementRef;

  @Input()
  labels: string[];

  @Input()
  datasets: any;

  constructor() {}

  ngAfterViewInit() {
    const draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
      draw: function () {
        draw.apply(this, arguments);
        const ctx = this.chart.chart.ctx;
        const _stroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#000000';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetY = 4;
          _stroke.apply(this, arguments);
          ctx.restore();
        };
      },
    });

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function (ease: any) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          var activePoint = this.chart.tooltip._active[0],
            ctx = this.chart.ctx,
            x = activePoint.tooltipPosition().x,
            topY = this.chart.scales['y-axis-0'].top,
            bottomY = this.chart.scales['y-axis-0'].bottom;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#07C';
          ctx.stroke();
          ctx.restore();
        }
      },
    });
    this.generateChartConfig();
  }

  ngOnInit(): void {}

  generateChartConfig(): Chart {
    return new Chart(this.canvas.nativeElement, {
      type: 'LineWithLine',
      data: {
        labels: this.labels,
        datasets: [...this.datasets],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: false,
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            title: (tooltipItem: ChartTooltipItem[]) => {
              return tooltipItem[0].label?.toString() || '';
            },
            label: (tooltipItem: ChartTooltipItem) => {
              return CurrencyUtil.formatCurrency(tooltipItem.value);
            },
            footer: (tooltipItems: ChartTooltipItem[], data: any) => {
              let sum = 0;
              tooltipItems.forEach((it: any) => {
                sum += data.datasets[it.datasetIndex].data[it.index];
              });
              return `Total ${CurrencyUtil.formatCurrency(sum)} `;
            },
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                borderDash: [2, 2],
              },
            },
          ],
        },
      },
    });
  }
}
