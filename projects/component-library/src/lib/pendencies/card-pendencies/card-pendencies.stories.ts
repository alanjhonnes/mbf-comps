import { storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { PendenciesModule } from '../../pendencies/pendencies.module';

storiesOf('Card-Pendencias', module)
    .add('Exemplo do card de pendencias', () => {
        return {
            moduleMetadata: {
                imports: [PendenciesModule],
            },
            props: {
                text: text('text', 'Informativo'),
                title: text('title', 'Título'),
            },

            template: `
                <sf-card-pendencies
                [text]="text"
                [title]="title">
                </sf-card-pendencies>
            `,
        };
    });
