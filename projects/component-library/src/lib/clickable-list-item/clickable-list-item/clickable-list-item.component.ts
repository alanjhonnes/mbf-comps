import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
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
  @Input()
  content: string;

  @Input()
  contentTemplate: TemplateRef<{ $implicit: string }> | undefined;

  @Output()
  clicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(true);
  }
}
