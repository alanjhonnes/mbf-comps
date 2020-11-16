import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sf-card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOptionsComponent implements OnInit {
  @Input() options: string[];
  @Output() selected = new EventEmitter<string>();

  public show: boolean;
  public clickedIn: boolean;
  public clickedOut: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clickInside() {
    this.clickedIn = true;
    this.show = !this.show;
  }

  @HostListener('document:click')
  clickOutside() {
    if (!this.clickedIn && this.show) {
      this.show = false;
    }
    this.clickedIn = false;
  }

  onSelectOption(option: string) {
    this.selected.emit(option);
  }
}
