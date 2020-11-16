import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sf-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoButtonComponent implements OnInit {
  @Input() options: string[];
  @ViewChild('icon') icon: ElementRef;
  @ViewChild('tooltip') tooltip: ElementRef;

  public show: boolean;
  public clickedIn: boolean;
  public clickedOut: boolean;
  public tooltipPosition: string;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clickInside() {
    this.clickedIn = true;
    this.show = !this.show;
    this.setTooltipPosition();
  }

  @HostListener('document:click')
  clickOutside() {
    if (!this.clickedIn && this.show) {
      this.show = false;
    }
    this.clickedIn = false;
  }

  setTooltipPosition() {
    const rectIcon = this.icon.nativeElement.getBoundingClientRect();
    const rectTooltip = this.tooltip.nativeElement.getBoundingClientRect();

    // X
    if (rectIcon.left <= rectTooltip.width) {
      this.tooltipPosition = 'right';
    } else {
      this.tooltipPosition = 'left';
    }

    // Y
    if (rectIcon.top <= (rectTooltip.height / 2)) {
      this.tooltipPosition = `top ${this.tooltipPosition}`;
    } else if (rectIcon.bottom + (rectTooltip.height / 2) >= window.innerHeight) {
      this.tooltipPosition = `bottom ${this.tooltipPosition}`;
    };
  }
}
