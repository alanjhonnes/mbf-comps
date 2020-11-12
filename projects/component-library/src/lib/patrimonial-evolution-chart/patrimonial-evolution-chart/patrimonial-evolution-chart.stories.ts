import { array, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { ChartDataSets } from 'chart.js';
import { PatrimonialEvolutionChartModule } from '../patrimonial-evolution-chart.module';

storiesOf('PatrimonialEvolutionChart', module).add('Default settings', () => {
  const datasets: ChartDataSets[] = [
    {
      data: [1, 5, 3, 9, 11],
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'rgba(0,0,255,0.3)',
    },
    {
      data: [2, 6, 4, 10, 12],
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'rgba(0,0,255,0.3)',
    },
  ];

  return {
    moduleMetadata: {
      imports: [PatrimonialEvolutionChartModule],
    },
    props: {
      labels: array('labels', [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
      ]),
      datasets: object('datasets', datasets),
    },
    template: `
        <sf-patrimonial-evolution-chart [labels]="labels" [datasets]="datasets"></sf-patrimonial-evolution-chart>
      `,
  };
});
