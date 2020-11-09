import { storiesOf } from '@storybook/angular';
import { InvestBarModule } from '../invest-bar.module';


storiesOf('Invest-Bar', module)
    .add('Exemplo da Barra de investidor', () => {
        return {
            moduleMetadata: {
                imports: [InvestBarModule],
            },
            props: {
            },

            template: `
                <sf-invest-bar>
                </sf-invest-bar>
            `,
        };
    });