import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { BottomSheetModule } from '../bottom-sheet.module';

storiesOf('BottomSheet', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [BottomSheetModule],
    },
    props: {},
    template: `
      <sf-bottom-sheet >
         <span>Tudo certo ?</span>
      </sf-bottom-sheet>
      `,
  };
});
