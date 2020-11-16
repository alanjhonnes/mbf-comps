import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { InfoButtonModule } from './../info-button.module';

storiesOf('InfoButton', module)
    .add('Info Button', () => {
        return {
            moduleMetadata: {
                imports: [InfoButtonModule],
            },
            props: {
                x: text('x', '50%'),
                y: text('y', '50%')
            },
            template: `
                <div style="position: absolute;left: {{x}}; top: {{y}};">
                    <sf-info-button>
                        Content...
                    </sf-info-button>
                </div>
            `,
        };
    });
