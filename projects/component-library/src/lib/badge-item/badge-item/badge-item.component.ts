import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sf-badge-item',
  templateUrl: './badge-item.component.html',
  styleUrls: ['./badge-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeItemComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  number: string;

  @Output()
  clicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(true);
  }
}
