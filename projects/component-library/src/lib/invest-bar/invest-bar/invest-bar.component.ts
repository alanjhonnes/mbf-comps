import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sf-invest-bar',
  templateUrl: './invest-bar.component.html',
  styleUrls: ['./invest-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
