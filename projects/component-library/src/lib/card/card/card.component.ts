import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'sf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {

  @Input()
  titular: string;

  @Input()
  cardSelect: true;

  @Input()
  numero: string;

  @HostBinding('class.sf-card')
  readonly defaultClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
