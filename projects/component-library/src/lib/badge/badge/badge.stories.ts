import { storiesOf } from '@storybook/angular';
import { BadgeModule } from '../badge.module';

storiesOf('Badge', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [BadgeModule],
    },
    template: '<sf-badge>400</sf-badge>',
  };
});
