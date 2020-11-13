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
  selector: 'sf-card-pendencies-item',
  templateUrl: './card-pendencies-item.component.html',
  styleUrls: ['./card-pendencies-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPendenciesItemComponent implements OnInit {
  @Output()
  clicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(true);
  }
}
