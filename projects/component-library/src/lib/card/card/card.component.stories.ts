import { storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CardModule } from '../card.module';
import { CardComponent } from './card.component';

storiesOf('Card', module)
    .add('Simple card example', () => {
        return {
            moduleMetadata: {
                imports: [CardModule],
            },
            props: {
                numero: text(
                    'Número',
                    '**** **** **** ****',
                ),
                titular: text(
                    'Titular',
                    'titular',
                ),
            },

            template: `
        <sf-card
        [numero]="numero"
        [titular]="titular">
        </sf-card>
      `,
        };
    })

    ;
