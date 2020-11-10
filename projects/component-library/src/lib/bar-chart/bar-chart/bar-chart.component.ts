import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'sf-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ElementRef;

  public chartLabels: Label[];
  public chartType: ChartType;
  public chartLegend: boolean;
  public chartPlugins: [];
  public chartDataSets: ChartDataSets[];
  public chartOptions: ChartOptions;
  public chartColors: Color[];

  constructor() {
    this.chartLabels = ['D0', 'D15', 'D30', 'D60', 'D90', 'D180', 'D361', 'D721', 'D2999'];
    this.chartType = 'bar';
    this.chartLegend = false;
    this.chartPlugins = [];
    this.chartColors = [];

    this.chartDataSets = [
      {
        data: [3000.0, 2000.0, 2500.0, 2000.0, 3000.0, 2500.0, 2000.0, 3000.0, 2500.0],
        label: 'R$',
        hoverBackgroundColor: '#7495B8',
        backgroundColor: '#7495B8'
      },
    ];

    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            maxTicksLimit: 6,
            autoSkip: false,
          },
        }]
      }
    };
  }

  ngOnInit(): void {
    // this.loadColors();
  }

  loadColors() {
    const gradient = this.chart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#7495B8');
    gradient.addColorStop(1, '#00002D');

    this.chartColors = [
      {
        backgroundColor: gradient
      }
    ];
  }

}
