import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sf-button-set',
  templateUrl: './button-set.component.html',
  styleUrls: ['./button-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSetComponent implements OnInit {

  @Input() firstButtonText: string;

  @Input() secondButtonText: string;

  @Output() firstBtnClick = new EventEmitter<boolean>();

  @Output() secondBtnClick = new EventEmitter<boolean>();

  public buttonActive: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  firstOnClick() {
    this.firstBtnClick.emit(true);
    this.buttonActive = 'first';
  }

  secondOnClick() {
    this.secondBtnClick.emit(true);
    this.buttonActive = 'second';
  }

}
