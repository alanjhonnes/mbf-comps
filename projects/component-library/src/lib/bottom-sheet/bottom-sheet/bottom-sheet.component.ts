import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sf-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent implements OnInit {
  isOpen = false;

  @Input()
  texto = '';

  @Output()
  cancelOperation = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClickClose(): void {
    this.cancelOperation.emit(true);
  }
}
