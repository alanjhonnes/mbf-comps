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
import Chart, { ChartDataSets, ChartTooltipItem } from 'chart.js';
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
  datasets: ChartDataSets[];

  constructor() {}

  ngAfterViewInit() {
    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
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
    this.generateChartConfig();
  }

  ngOnInit(): void {}

  generateChartConfig(): Chart {
    //TODO ajustar
    const ctx = this.canvas.nativeElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, '#00003C');
    gradient.addColorStop(1, '#7E7E9D');
    this.datasets[0].backgroundColor = gradient;

    return new Chart(this.canvas.nativeElement, {
      type: 'LineWithLine',
      data: {
        labels: this.labels,
        datasets: [...this.datasets],
      },
      options: {
        layout: {
          padding: {
            right: 20,
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
                stepSize: 2,
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
