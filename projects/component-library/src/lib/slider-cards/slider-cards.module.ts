import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { CardModule } from '../card-visualization/card-visualization.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SliderCardComponent],
  imports: [
    CommonModule, CardModule, BrowserAnimationsModule,
  ],
  exports: [SliderCardComponent]
})
export class SliderCardsModule { }
