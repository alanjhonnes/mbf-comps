import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableListItemComponent } from './clickable-list-item/clickable-list-item.component';

@NgModule({
  declarations: [ClickableListItemComponent],
  imports: [CommonModule],
  exports: [ClickableListItemComponent],
})
export class ClickableListItemModule {}
