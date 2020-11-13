import { array, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { PatrimonialEvolutionChartModule } from '../patrimonial-evolution-chart.module';

storiesOf('PatrimonialEvolutionChart', module).add('Default settings', () => {
  const datasets = [
    {
      data: [1, 5, 3, 9, 16],
      borderColor: 'black',
      colorOne: '#ffff00',
      colorTwo: '#999900',
    },
    {
      data: [2, 6, 4, 10, 12],
      borderColor: 'black',
      colorOne: '#803300',
      colorTwo: '#7E7E9D',
    },
    {
      data: [2, 6, 4, 10, 12],
      borderColor: 'black',
      colorOne: '#ff1a8c',
      colorTwo: '#e600e6',
    },
    {
      data: [2, 6, 4, 10, 12],
      borderColor: 'black',
      colorOne: '#660066',
      colorTwo: '#66ff66',
    },
  ];

  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];

  return {
    moduleMetadata: {
      imports: [PatrimonialEvolutionChartModule],
    },
    props: {
      labels: array('labels', labels),
      datasets: object('datasets', datasets),
    },
    template: `
        <sf-patrimonial-evolution-chart [labels]="labels" [datasets]="datasets"></sf-patrimonial-evolution-chart>
      `,
  };
});
