import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapsibleItemComponent } from './collapsible-item/collapsible-item.component';

@NgModule({
  declarations: [CollapsibleItemComponent],
  imports: [CommonModule],
  exports: [CollapsibleItemComponent],
})
export class CollapsibleItemModule {}
