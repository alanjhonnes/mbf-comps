import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sf-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleItemComponent implements OnInit {

  @Input()
  header: string = 'header';

  @Input()
  headerTemplate: TemplateRef<{ $implicit: string }> | undefined;

  @Input()
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

}
