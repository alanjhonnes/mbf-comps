import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'sf-patrimonial-evolution-chart',
  templateUrl: './patrimonial-evolution-chart.component.html',
  styleUrls: ['./patrimonial-evolution-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatrimonialEvolutionChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
