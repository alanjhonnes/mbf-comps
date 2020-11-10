import { storiesOf } from '@storybook/angular';
import { BarChartModule } from '../bar-chart.module';

storiesOf('BarChart', module)
    .add('Bar Chart', () => {
        return {
            moduleMetadata: {
                imports: [BarChartModule],
            },
            props: {},
            template: `
                <sf-bar-chart>
                </sf-bar-chart>
            `,
        };
    });
