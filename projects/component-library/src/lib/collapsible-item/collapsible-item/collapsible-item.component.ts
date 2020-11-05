import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sf-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleItemComponent implements OnInit {
  @Input()
  header = 'header';

  @Input()
  headerTemplate: TemplateRef<{ $implicit: string }> | undefined;

  @Input()
  open = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.open = !this.open;
  }
}
