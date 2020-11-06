import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {
  FullscreenOverlayContainer,
  OverlayContainer,
  OverlayModule,
} from '@angular/cdk/overlay';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [CommonModule, OverlayModule],
  exports: [BottomSheetComponent],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
})
export class BottomSheetModule {}
