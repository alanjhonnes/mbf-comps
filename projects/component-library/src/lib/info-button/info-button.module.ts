import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoButtonComponent } from './info-button/info-button.component';

@NgModule({
  declarations: [InfoButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [InfoButtonComponent]
})
export class InfoButtonModule { }
