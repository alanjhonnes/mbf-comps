import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { BarChartModule } from '../bar-chart.module';

storiesOf('BarChart', module)
    .add('Bar Chart', () => {
        const chartLabels = ['D0', 'D15', 'D30', 'D60', 'D90', 'D180', 'D361', 'D721', 'D2999'];
        const chartData = [3000.0, 2000.0, 2500.0, 2000.0, 3000.0, 2500.0, 2000.0, 3000.0, 2500.0];
        const chartTooltipText = [
            ['5% da carteira', '01/01/2020'],
            ['10% da carteira', '01/02/2020'],
            ['15% da carteira', '01/03/2020'],
            ['20% da carteira', '01/04/2020'],
            ['25% da carteira', '01/05/2020'],
            ['30% da carteira', '01/06/2020'],
            ['35% da carteira', '01/07/2020'],
            ['40% da carteira', '01/08/2020'],
            ['45% da carteira', '01/09/2020']];

        return {
            moduleMetadata: {
                imports: [BarChartModule],
            },
            props: {
                chartLabels: object('chartLabels', chartLabels),
                chartData: object('chartData', chartData),
                chartTooltipText: object('chartTooltipText', chartTooltipText)
            },
            template: `
                <sf-bar-chart
                    [chartLabels]="chartLabels"
                    [chartData]="chartData"
                    [chartTooltipText]="chartTooltipText">
                </sf-bar-chart>
            `,
        };
    });