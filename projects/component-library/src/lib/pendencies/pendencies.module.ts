import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPendenciesComponent } from './card-pendencies/card-pendencies.component';
import { BadgeItemComponent } from '../badge-item/badge-item/badge-item.component';


@NgModule({
  declarations: [CardPendenciesComponent, BadgeItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardPendenciesComponent, BadgeItemComponent],
})
export class PendenciesModule { }
