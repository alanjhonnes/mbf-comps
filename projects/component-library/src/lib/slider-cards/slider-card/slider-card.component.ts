import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SlideToViewHammerConfig } from '../hammer-config.class';

export interface SlideItem<T = any> {
  item: T;
  type: 'active' | 'before' | 'after';
  offset: number;
}

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
export class SliderCardComponent implements OnChanges {
  cards: SlideItem[] = [];

  trackByFn = (index: number, slide: SlideItem) => {
    return slide.item;
  };

  @Input()
  slideItens = [
    { index: 0 },
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
  ];

  readonly maxVisible = 3;
  readonly maxOffset = 2;

  @HostBinding('class.sf-slider-card')
  readonly defaultClass = true;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  activeIndex = 0;

  onSwipeRight() {
    // if (this.activeIndex > 0) {
    this.activeIndex = this.activeIndex - 1;
    if (this.activeIndex === -1) {
      this.activeIndex = this.slideItens.length - 1;
    }
    this.changeActiveIndex(this.activeIndex);
    // }

  }

  onSwipeLeft() {
    if (this.activeIndex < this.slideItens.length) {

      this.activeIndex = this.activeIndex + 1;

      if (this.activeIndex >= this.slideItens.length) {
        this.activeIndex = 0;
      }
      this.changeActiveIndex(this.activeIndex);
    }
  }

  ngOnChanges(changes: any) {
    if (changes.slideItens) {
      this.cards = [];
      this.slideItens.forEach((value, index) => {
        if (index === 0) {
          this.cards.push({
            type: 'active',
            offset: 0,
            item: value,
          });
        } else {
          this.cards.push({
            offset: index,
            type: 'after',
            item: value,
          });
        }
      });
    }
  }

  changeActiveIndex(activeIndex: number) {
    this.cards.forEach((value, cardIndex) => {
      value.type = activeIndex === cardIndex
        ? 'active'
        : cardIndex < activeIndex
          ? 'before'
          : 'after';
      value.offset = Math.abs(activeIndex - cardIndex);
    });
    this.changeDetectorRef.detectChanges();
  }

  getNgClassForCard(card: SlideItem): Record<string, boolean> {
    const classes: Record<string, boolean> = {};
    classes[`sf-slider-card__item--${card.type}`] = true;
    if (card.type !== 'active') {
      classes[`sf-slider-card__item--${card.type}-${card.offset}`] = true;
    }
    return classes;
  }
}
