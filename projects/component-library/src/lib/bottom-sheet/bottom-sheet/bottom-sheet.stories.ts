import { Component, OnInit, TemplateRef } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { SfBottomSheetModule } from '../bottom-sheet.module';
import { SfBottomSheetService } from './bottom-sheet';


@Component({
  selector: 'sf-bottom-sheet-example',
  template: `
    <button (click)="open(template)">Open</button>

    <ng-template #template>
      TESTE BOTTOM SHEET
    </ng-template>
  `,
})
class BottomSheetExampleComponent implements OnInit {
  constructor(private _sfBottomSheet: SfBottomSheetService) { }

  ngOnInit(): void { }

  open(template: TemplateRef<any>): void {
    this._sfBottomSheet.open(template);
  }
}

storiesOf('BottomSheet', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [SfBottomSheetModule],
      declarations: [BottomSheetExampleComponent],
    },
    template: '<sf-bottom-sheet-example></sf-bottom-sheet-example>',
    props: {},
  };
});
