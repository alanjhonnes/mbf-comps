import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { MatBottomSheet } from './bottom-sheet';
import { MatBottomSheetRef } from './bottom-sheet-ref';

@Component({
  selector: 'sf-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  bottomSheet: MatBottomSheetRef;

  ngOnInit(): void {}

  open(template: TemplateRef<any>): void {
    this.bottomSheet = this._bottomSheet.open(template);
  }

  clicked(): void {
    console.log('close');
    this.bottomSheet.dismiss();
  }
}
