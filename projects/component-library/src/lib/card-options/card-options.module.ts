import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardOptionsComponent } from './card-options/card-options.component';

@NgModule({
  declarations: [CardOptionsComponent],
  imports: [
    CommonModule
  ],
  exports: [CardOptionsComponent]
})
export class CardOptionsModule { }
