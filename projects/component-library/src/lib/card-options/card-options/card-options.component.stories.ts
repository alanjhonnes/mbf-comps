import { action } from '@storybook/addon-actions';
import { array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CardOptionsModule } from './../card-options.module';

storiesOf('CardOptions', module)
    .add('Card Options', () => {
        const options: string[] = ['Resgatar', 'Aplicar', 'Lâmina'];

        return {
            moduleMetadata: {
                imports: [CardOptionsModule],
            },
            props: {
                options: array('options', options),
                clicked: action('selected'),
            },
            template: `
            <div>
                <div style="background: #f6f9fc; padding: 16px; margin: auto; height: 180px; width:300px">
                    <sf-card-options
                        (selected)="clicked($event)"
                        [options]="options">
                    </sf-card-options>
                </div>
            </div>
            `,
        };
    });