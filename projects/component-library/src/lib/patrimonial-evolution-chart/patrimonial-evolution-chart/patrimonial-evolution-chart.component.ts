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
    this.generateChartConfig();
    this.generateDrawChart();
  }

  ngOnInit(): void {}

  private generateRandonColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private setColorDatasets(ctx: any) {
    this.datasets.forEach((it: any) => {
      const gradient = ctx.createLinearGradient(100, 0, 0, 100);
      gradient.addColorStop(0, it.colorOne || this.generateRandonColor());
      gradient.addColorStop(1, it.colorTwo || this.generateRandonColor());
      it.backgroundColor = gradient;
    });
  }

  private generateDrawChart(): void {
    //Chart.defaults.LineWithLine = Chart.defaults.line;
    //Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    Chart.controllers.line.extend({
      draw: function (ease: any) {
        Chart.controllers.line.prototype.draw.call(this, ease);
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          let activePoint = this.chart.tooltip._active[0],
            ctx = this.chart.ctx,
            x = activePoint.tooltipPosition().x,
            topY = this.chart.scales['y-axis-0'].top,
            bottomY = this.chart.scales['y-axis-0'].bottom;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#2A2A5C';
          ctx.stroke();
          ctx.restore();
        }
      },
    });
  }

  private generateChartConfig(): Chart {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.setColorDatasets(ctx);
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [...this.datasets],
      },
      options: {
        plugins: {
          filler: {
            propagate: true,
          },
        },
        layout: {
          padding: {
            right: 20,
            bottom: -160,
          },
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        responsive: false,
        tooltips: {
          mode: 'index',
          intersect: false,
          backgroundColor: '#2F80ED',
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
              stacked: true,
              ticks: {
                display: false,
                beginAtZero: true,
              },
              gridLines: {
                borderDash: [2, 2],
                drawBorder: false,
              },
            },
          ],
        },
      },
    });
  }
}
