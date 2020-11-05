import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';



@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }
