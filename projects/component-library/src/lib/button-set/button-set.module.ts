import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSetComponent } from './button-set/button-set.component';



@NgModule({
  declarations: [ButtonSetComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonSetComponent]
})
export class ButtonSetModule { }
