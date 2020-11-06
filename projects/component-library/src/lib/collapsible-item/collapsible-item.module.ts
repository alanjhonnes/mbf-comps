import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleItemComponent } from './collapsible-item/collapsible-item.component';



@NgModule({
  declarations: [CollapsibleItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CollapsibleItemComponent]
})
export class CollapsibleItemModule { }
