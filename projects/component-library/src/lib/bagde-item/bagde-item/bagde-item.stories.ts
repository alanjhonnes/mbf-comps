import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { BagdeItemModule } from '../bagde-item.module';

storiesOf('BagdeItem', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [BagdeItemModule],
    },
    props: {
      clicked: action('clicked'),
    },
    template:
      '<sf-bagde-item text="Texto" number="7" (clicked)="clicked($event)"></sf-bagde-item>',
  };
});
