import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPendenciesComponent } from './card-pendencies/card-pendencies.component';
import { BadgeComponent } from '../badge/badge/badge.component';
import { ClickableListItemComponent } from '../clickable-list-item/clickable-list-item/clickable-list-item.component';

@NgModule({
  declarations: [CardPendenciesComponent, BadgeComponent, ClickableListItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardPendenciesComponent, BadgeComponent, ClickableListItemComponent],
})
export class PendenciesModule { }
