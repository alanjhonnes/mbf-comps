/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { SfBottomSheetCommonModule } from './bottom-sheet-common-module';
import { SfBottomSheetContainer } from './bottom-sheet-container';

@NgModule({
  imports: [OverlayModule, SfBottomSheetCommonModule, PortalModule],
  exports: [SfBottomSheetContainer, SfBottomSheetCommonModule],
  declarations: [SfBottomSheetContainer],
  entryComponents: [SfBottomSheetContainer],
})
export class SfBottomSheetModule { }
