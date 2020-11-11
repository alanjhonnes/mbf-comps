import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SlideToViewHammerConfig } from '../hammer-config.class';

@Component({
  selector: 'sf-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: SlideToViewHammerConfig,
    },
  ],

})
export class SliderCardComponent {

  @HostBinding('class.sf-slider-card')
  readonly defaultClass = true;

  // @Output()
  // dragToTheSide = new EventEmitter<void>();

  @Input()
  slideThreshold: number;
  startTranslateX = 0;
  translateX = 0;

  @ViewChild('container')
  containerRef: ElementRef;

  constructor() {
  }

  slides = 0;

  onSwipeRight(event: any, data: number) {
    console.log('event right', event);
    this.slides = this.slides + data;

    if (this.slides == 2) {
      this.slides = 0;
    }
  }

  onSwipeLeft(event: any, data: number) {
    console.log('event left', event);
    this.slides = this.slides + data;
    console.log('slides', this.slides);
    if (this.slides == -2) {
      this.slides = 0;
    }
  }

}
