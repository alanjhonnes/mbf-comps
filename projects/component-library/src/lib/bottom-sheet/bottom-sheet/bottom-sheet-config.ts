import { Direction } from '@angular/cdk/bidi';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { InjectionToken, ViewContainerRef } from '@angular/core';

export const SF_BOTTOM_SHEET_DATA = new InjectionToken<any>(
  'SfBottomSheetData',
);

export class SfBottomSheetConfig<D = any> {
  viewContainerRef?: ViewContainerRef;
  panelClass?: string | string[];
  direction?: Direction;
  data?: D | null = null;
  hasBackdrop?: boolean = true;
  backdropClass?: string;
  disableClose?: boolean = false;
  ariaLabel?: string | null = null;
  closeOnNavigation?: boolean = true;
  autoFocus?: boolean = false;
  restoreFocus?: boolean = true;
  scrollStrategy?: ScrollStrategy;
}
