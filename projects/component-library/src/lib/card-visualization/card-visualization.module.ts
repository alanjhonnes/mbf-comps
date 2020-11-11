import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CardVisualizationComponent } from './card-visualization/card-visualization.component';



@NgModule({
  declarations: [CardVisualizationComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CardVisualizationComponent]
})
export class CardModule { }
