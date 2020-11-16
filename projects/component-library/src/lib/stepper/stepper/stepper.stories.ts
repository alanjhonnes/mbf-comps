import { storiesOf } from '@storybook/angular';
import { StepperModule } from '../stepper.module';


storiesOf('Stepper', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [StepperModule],
    },
    props: {
      steps: [
        'DADOS', 'CONFIRMAÇÃO', 'COMPROVANTE',
      ],
      status: 2
    },
    template: `
        <sf-stepper [steps]="steps" [status]="status">
        </sf-stepper>
      `,
  };
});
