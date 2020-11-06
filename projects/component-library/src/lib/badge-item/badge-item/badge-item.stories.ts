import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { BadgeItemModule } from '../badge-item.module';

storiesOf('BadgeItem', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [BadgeItemModule],
    },
    props: {
      clicked: action('clicked'),
    },
    template:
      '<sf-badge-item text="Texto" number="7" (clicked)="clicked($event)"></sf-badge-item>',
  };
});
