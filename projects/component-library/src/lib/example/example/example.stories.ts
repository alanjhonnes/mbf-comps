import { storiesOf } from '@storybook/angular';
import { select, text, boolean } from '@storybook/addon-knobs';
import { ExampleModule } from '../example.module';

storiesOf('Example', module).add('Example with full settings', () => {
  return {
    moduleMetadata: {
      imports: [ExampleModule],
    },
    props: {
      action: text(
        'action',
        'Action',
      ),
    },
    template: `
      <sf-example></sf-example>
    `,
  };
});
