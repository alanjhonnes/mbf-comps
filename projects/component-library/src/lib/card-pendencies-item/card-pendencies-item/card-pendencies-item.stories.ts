import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { CardPendenciesItemModule } from '../card-pendencies-item.module';

storiesOf('CardPendenciesItem', module).add('Default settings', () => {
  return {
    moduleMetadata: {
      imports: [CardPendenciesItemModule],
    },
    props: {
      clicked: action('clicked'),
    },
    template: `
        <sf-card-pendencies-item (clicked)="clicked($event)">
        Conteúdo
        </sf-card-pendencies-item>
      `,
  };
});
