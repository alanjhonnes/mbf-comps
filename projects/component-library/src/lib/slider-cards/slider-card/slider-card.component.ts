import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  ViewChild,
  OnChanges,
  ElementRef,
} from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SlideToViewHammerConfig } from '../hammer-config.class';

export interface SlideItem<T = any> {
  item: T;
  index: number;
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
  cards: SlideItem[] = [
    {
      index: 0,
      item: {},
    },
    {
      index: 1,
      item: {},
    },
    {
      index: -1,
      item: {},
    },
  ];

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

  // @Output()
  // dragToTheSide = new EventEmitter<void>();

  @Input()
  slideThreshold: number;
  startTranslateX = 0;
  translateX = 0;

  @ViewChild('container')
  containerRef: ElementRef;

  constructor() { }

  activeIndex = 0;

  onSwipeRight() {
    this.activeIndex = this.activeIndex - 1;

    if (this.activeIndex === -1) {
      this.activeIndex = this.slideItens.length - 1;
    }
    this.changeActiveIndex(this.activeIndex);
  }

  onSwipeLeft() {
    this.activeIndex = this.activeIndex + 1;

    if (this.activeIndex >= this.slideItens.length) {
      this.activeIndex = 0;
    }
    this.changeActiveIndex(this.activeIndex);
  }

  ngOnChanges(changes: any) {
    if (changes.slideItens) {
      this.cards = [];
      if (this.slideItens.length > 0) {
        this.cards.push({
          index: 0,
          item: this.slideItens[0],
        });
        if (this.slideItens.length > 1)
          this.cards.push({
            index: 1,
            item: this.slideItens[1],
          });
      }
      if (this.slideItens.length > 1) {
        this.cards.push({
          index: -1,
          item: this.slideItens[2],
        });
      }
    }
  }

  changeActiveIndex(index: number) {
    if (this.slideItens.length > this.maxVisible) {
      this.cards = [];
      const mainCard = this.slideItens[index];
      const previousCard =
        index === 0
          ? this.slideItens[this.slideItens.length - 1]
          : this.slideItens[index - 1];
      const nextCard =
        index === this.slideItens.length - 1
          ? this.slideItens[0]
          : this.slideItens[index + 1];
      this.cards.push({
        index: 0,
        item: mainCard,
      });
      this.cards.push({
        index: 1,
        item: nextCard,
      });
      this.cards.push({
        index: -1,
        item: previousCard,
      });
    } else {
      this.cards = [];
      const mainCard = this.slideItens[index];
      const previousCard =
        index === 0
          ? this.slideItens[this.slideItens.length - 1]
          : this.slideItens[index - 1];
      const nextCard =
        index === this.slideItens.length - 1
          ? this.slideItens[0]
          : this.slideItens[index + 1];
      this.cards.push({
        index: 0,
        item: mainCard,
      });
      this.cards.push({
        index: 1,
        item: nextCard,
      });
      this.cards.push({
        index: -1,
        item: previousCard,
      });
    }
  }
}
