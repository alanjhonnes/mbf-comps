import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sf-card-pendencias',
  templateUrl: './card-pendencias.component.html',
  styleUrls: ['./card-pendencias.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPendenciasComponent implements OnInit {

  constructor() { }

  @Input() texto: string;

  @Input() titulo: string;

  @Input() pendencias: [];

  ngOnInit(): void {
  }

}
