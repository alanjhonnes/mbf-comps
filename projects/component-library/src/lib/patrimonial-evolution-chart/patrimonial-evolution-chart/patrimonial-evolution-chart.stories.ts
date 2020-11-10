import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { PatrimonialEvolutionChartModule } from '../patrimonial-evolution-chart.module';

storiesOf('PatrimonialEvolutionChart', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [PatrimonialEvolutionChartModule],
    },
    props: {},
    template: `
        <sf-patrimonial-evolution-chart></sf-patrimonial-evolution-chart>
      `,
  };
});
