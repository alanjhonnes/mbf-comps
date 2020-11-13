import { storiesOf } from '@storybook/angular';
import { InvestBarModule } from '../invest-bar.module';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Invest-Bar', module)
    .add('Exemplo da Barra de investidor', () => {
        return {
            moduleMetadata: {
                imports: [InvestBarModule],
            },
            props: {
                value: text('value', '2'),
                title: text('title', 'Título'),
                description: text('description', 'Descrição'),
                profile: boolean('perfil/portifólio', true),
            },

            template: `
                <sf-invest-bar
                [value]="value"
                [title]="title"
                [description]="description"
                [profile]="profile"
                >
                </sf-invest-bar>
            `,
        };
    });