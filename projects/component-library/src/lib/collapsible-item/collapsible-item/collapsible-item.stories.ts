import { storiesOf } from '@storybook/angular';
import { boolean, select } from '@storybook/addon-knobs';
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
          Conteudo..
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
  })
  .add('With icon', () => {
    return {
      moduleMetadata: {
        imports: [CollapsibleItemModule],
      },
      props: {
        icon: select('icon', ['credit-card.svg', 'phone.svg', 'bank.svg'], 'credit-card.svg'),
      },
      template: `
        <sf-collapsible-item 
          header="Titulo"
          [icon]="icon"
          [(open)]="open">
          Conteudo..
        </sf-collapsible-item>
      `,
    };
  })
