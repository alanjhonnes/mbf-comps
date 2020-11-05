import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { CollapsibleItemModule } from '../collapsible-item.module';

storiesOf('CollapsibleItem', module)
  .add('Default settings', () => {
    return {
      moduleMetadata: {
        imports: [CollapsibleItemModule],
      },
      props: {
        open: boolean('open', false),
      },

      template: `
        <sf-collapsible-item header="Titulo"
          [(open)]="open">
          Conteúdo...
        </sf-collapsible-item>
      `,
    };
  })
  .add('With custom header', () => {
    return {
      moduleMetadata: {
        imports: [CollapsibleItemModule],
      },
      props: {
        open: boolean('open', true),
      },
      template: `
        <sf-collapsible-item header="Titulo"
          [(open)]="open"
          [headerTemplate]="headerTemplate">
          Conteúdo...
        </sf-collapsible-item>

        <ng-template #headerTemplate let-header>
          My custom template: {{header}}
        </ng-template>
      `,
    };
  });
