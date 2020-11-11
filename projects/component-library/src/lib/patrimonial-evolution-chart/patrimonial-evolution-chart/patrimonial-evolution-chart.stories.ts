import { array, knob, object, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { PatrimonialEvolutionChartModule } from '../patrimonial-evolution-chart.module';

storiesOf('PatrimonialEvolutionChart', module).add('Default settings', () => {
  const datasets = [
    {
      data: [10, 22, 13, 19, 5],
      backgroundColor: 'rgba(0,0,255,0.3)',
      bordercolor: 'rgba(0,0,255,0.3)',
    },
    {
      data: [20, 16, 5, 10, 14],
      backgroundColor: 'rgba(0,0,255,0.3)',
      bordercolor: 'rgba(0,0,255,0.3)',
    },
  ];

  return {
    moduleMetadata: {
      imports: [PatrimonialEvolutionChartModule],
    },
    props: {
      labels: array('labels', ['Janeiro', 'Fevereiro', 'Março', 'Abril']),
      datasets: object('datasets', datasets),
    },
    template: `
        <sf-patrimonial-evolution-chart [labels]="labels" [datasets]="datasets"></sf-patrimonial-evolution-chart>
      `,
  };
});
