import { storiesOf } from '@storybook/angular';
import { SliderCardsModule } from '../slider-cards.module';
import { action } from '@storybook/addon-actions';


storiesOf('Slider Card', module)
    .add('Default settings', () => {
        return {
            moduleMetadata: {
                imports: [SliderCardsModule],
            },
            props: {
                rightAnimationStart: action('rightAnimationStart'),
                rightAnimationDone: action('rightAnimationDone'),
                leftAnimationStart: action('leftAnimationStart'),
                leftAnimationDone: action('leftAnimationDone'),
            },

            template: `
        <sf-slider-card
          (rightAnimationStart)="rightAnimationStart()"
        (rightAnimationDone)="rightAnimationDone()"
        (leftAnimationStart)="leftAnimationStart()"
        (leftAnimationDone)="leftAnimationDone()">
        </sf-slider-card>
      `,
        };
    })


    ;
