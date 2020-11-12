import { storiesOf } from '@storybook/angular';
import { SliderCardsModule } from '../slider-cards.module';
import { action } from '@storybook/addon-actions';

storiesOf('Slider Card', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [SliderCardsModule],
    },
    props: {
      slideItens: [
        { index: 0 },
        { index: 1 },
        { index: 2 },
        { index: 3 },
        { index: 4 },
      ],
    },
    template: `
        <sf-slider-card [slideItens]="slideItens">
        </sf-slider-card>
      `,
  };
});
