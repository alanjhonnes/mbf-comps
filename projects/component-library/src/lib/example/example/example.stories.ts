import { storiesOf } from '@storybook/angular';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ExampleModule } from '../example.module';
import { ExampleComponent } from './example.component';

storiesOf('Example', module)
  .add('Example with full settings', () => {
    return {
      moduleMetadata: {
        imports: [ExampleModule],
      },
      props: {
        texto: text(
          'texto',
          'Action',
        ),
        clicked: action('clicked'),
      },

      template: `
        <sf-example
        [texto]="texto"
        (clicked)="clicked($event)">
          <button>Click me</button>
        </sf-example>
      `,
    };
  })
  .add('Example duplicated', () => {
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
      <sf-example></sf-example>
    `,
    };
  })


  ;
