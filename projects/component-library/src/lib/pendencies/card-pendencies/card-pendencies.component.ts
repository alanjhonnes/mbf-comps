import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'sf-card-pendencies',
  templateUrl: './card-pendencies.component.html',
  styleUrls: ['./card-pendencies.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPendenciesComponent implements OnInit {

  constructor() { }

  @Input() text: string;

  @Input() title: string;


  ngOnInit(): void {
  }

}
