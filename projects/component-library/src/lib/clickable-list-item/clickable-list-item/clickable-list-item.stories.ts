import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { ClickableListItemModule } from '../clickable-list-item.module';

storiesOf('ClickableListItem', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [ClickableListItemModule],
    },
    props: {
      clicked: action('clicked'),
    },
    template:
      '<sf-clickable-list-item (clicked)="clicked($event)">Conteúdo</sf-clickable-list-item>',
  };
});
