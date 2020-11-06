import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { ClickableListItemModule } from '../clickable-list-item.module';

storiesOf('ClickableListItem', module)
  .add('Default settings', () => {
    return {
      moduleMetadata: {
        imports: [ClickableListItemModule],
      },
      props: {
        clicked: action('clicked'),
      },
      template: `
    <sf-clickable-list-item content="Conteúdo..." (clicked)="clicked($event)">
      </sf-clickable-list-item>
      `,
    };
  })
  .add('With custom content', () => {
    return {
      moduleMetadata: {
        imports: [ClickableListItemModule],
      },
      props: {
        clicked: action('clicked'),
      },
      template: `
        <sf-clickable-list-item content="Conteúdo customizado..."
                             (clicked)="clicked($event)"
                             [contentTemplate]="contentTemplate">
        </sf-clickable-list-item>

        <ng-template #contentTemplate let-content>
          {{content}}
        </ng-template>
      `,
    };
  });
