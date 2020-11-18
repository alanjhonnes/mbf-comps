import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { ButtonSetModule } from '../button-set.module';


storiesOf('Button Set', module).add('Default settings', () => {
    return {
        moduleMetadata: {
            imports: [ButtonSetModule],
        },
        props: {
            firstClicked: action('firstBtnClick'),
            secondClicked: action('secondBtnClick'),
        },
        template: `
        <sf-button-set firstButtonText="Hoje" secondButtonText="Agendar" (firstBtnClick)="firstClicked($event)" (secondBtnClick)="secondClicked($event)">
        </sf-button-set>
      `,
    };
});
