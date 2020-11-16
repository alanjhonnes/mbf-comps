import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'sf-card-visualization',
  templateUrl: './card-visualization.component.html',
  styleUrls: ['./card-visualization.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVisualizationComponent implements OnInit {

  @Input()
  holderName: string;

  @Input()
  default: true;

  @Input()
  cardNumber: string;

  @HostBinding('class.sf-card-visualization')
  readonly defaultClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
