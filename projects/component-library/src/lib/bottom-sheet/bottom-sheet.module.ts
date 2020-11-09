import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from './bottom-sheet/bottom-sheet-module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [
    CommonModule,
    OverlayModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
  ],
  exports: [BottomSheetComponent],
})
export class BottomSheetModule {}
