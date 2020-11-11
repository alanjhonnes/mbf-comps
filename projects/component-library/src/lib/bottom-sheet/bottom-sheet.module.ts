import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SfBottomSheetContainer } from './bottom-sheet/bottom-sheet-container';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [SfBottomSheetContainer],
  imports: [
    CommonModule,
    OverlayModule,
    BrowserAnimationsModule,
    PortalModule,
  ],
  exports: [SfBottomSheetContainer],
  entryComponents: [SfBottomSheetContainer],
})
export class SfBottomSheetModule { }
