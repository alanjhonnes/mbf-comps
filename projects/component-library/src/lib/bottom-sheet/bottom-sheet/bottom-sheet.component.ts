import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { SfBottomSheet } from './bottom-sheet';
import { SfBottomSheetRef } from './bottom-sheet-ref';

@Component({
  selector: 'sf-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent implements OnInit {
  constructor(private _sfBottomSheet: SfBottomSheet) {}

  bottomSheet: SfBottomSheetRef;

  ngOnInit(): void {}

  open(template: TemplateRef<any>): void {
    this.bottomSheet = this._sfBottomSheet.open(template);
  }
}
