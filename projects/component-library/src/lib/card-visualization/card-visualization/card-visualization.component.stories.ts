import { storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { CardModule } from '../card-visualization.module';
import { CardVisualizationComponent } from './card-visualization.component';

storiesOf('Card', module)
    .add('Simple card example', () => {
        return {
            moduleMetadata: {
                imports: [CardModule],
            },
            props: {
                cardNumber: text(
                    'Número',
                    '**** **** **** ****',
                ),
                holderName: text(
                    'Titular',
                    'titular',
                ),
            },

            template: `
        <sf-card-visualization
        [cardNumber]="cardNumber"
        [holderName]="holderName">
        </sf-card-visualization>
      `,
        };
    })

    ;
