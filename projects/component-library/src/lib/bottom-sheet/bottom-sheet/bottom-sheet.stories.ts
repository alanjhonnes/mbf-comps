import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { BottomSheetModule } from '../bottom-sheet.module';

storiesOf('BottomSheet', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [BottomSheetModule],
    },
    props: {
      cancelOperation: action('cancelOperation'),
    },

    template: `
      <sf-bottom-sheet texto="Tudo certo?" (click)="cancelOperation($event)">
        Botao - Usar Foto / Botao - Cancelar
      </sf-bottom-sheet>`,
  };
});
