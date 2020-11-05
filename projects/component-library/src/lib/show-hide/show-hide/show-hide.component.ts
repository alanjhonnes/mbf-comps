import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'sf-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowHideComponent implements OnInit {

  @Input()
  show = true;

  @Output()
  showChange = new EventEmitter<boolean>();

  @HostBinding('class.sf-show-hide')
  readonly defaultClass = true;

  @HostListener('click')
  onClick() {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
