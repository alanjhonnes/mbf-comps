import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPendenciasComponent } from './card-pendencias/card-pendencias.component';



@NgModule({
  declarations: [CardPendenciasComponent],
  imports: [
    CommonModule
  ],
  exports: [CardPendenciasComponent]
})
export class PendenciasModule { }
