import { action } from '@storybook/addon-actions';
import { number, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { StepperModule } from '../stepper.module';


storiesOf('Stepper', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [StepperModule],
    },
    props: {
      steps: object('steps', [
        'DADOS', 'CONFIRMAÇÃO', 'COMPROVANTE',
      ]),
      status: number('status', 2),
      clickStep: action('clickStep'),
    },
    template: `
        <sf-stepper [steps]="steps" [status]="status" (clickStep)="clickStep($event)">
        </sf-stepper>
      `,
  };
});
