import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sf-clickable-list-item',
  templateUrl: './clickable-list-item.component.html',
  styleUrls: ['./clickable-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickableListItemComponent implements OnInit {
  @Output()
  clicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(true);
  }
}
