import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoButtonComponent } from './info-button/info-button.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [InfoButtonComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [InfoButtonComponent]
})
export class InfoButtonModule { }
