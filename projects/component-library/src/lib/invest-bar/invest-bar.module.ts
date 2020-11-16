import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestBarComponent } from './invest-bar/invest-bar.component';



@NgModule({
  declarations: [InvestBarComponent],
  imports: [
    CommonModule
  ],
  exports: [InvestBarComponent]
})
export class InvestBarModule { }
