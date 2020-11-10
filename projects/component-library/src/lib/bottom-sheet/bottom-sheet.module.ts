import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SfBottomSheetModule } from './bottom-sheet/bottom-sheet-module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [
    CommonModule,
    OverlayModule,
    BrowserAnimationsModule,
    SfBottomSheetModule,
  ],
  exports: [BottomSheetComponent],
})
export class BottomSheetModule {}
