import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import { ShowHideModule } from '../show-hide.module';

storiesOf('ShowHide', module)
  .add('Default settings', () => {
    return {
      moduleMetadata: {
        imports: [ShowHideModule],
      },
      props: {
        show: boolean(
          'show',
          true,
        ),

      },

      template: `
        <sf-show-hide [(show)]="show">
        </sf-show-hide>
      `,
    };
  })


  .add('With content', () => {
    return {
      moduleMetadata: {
        imports: [ShowHideModule],
      },
      props: {
        show: boolean(
          'show',
          true,
        ),
      },
      template: `
        <sf-show-hide
                  [(show)]="show">
        </sf-show-hide>

        <div *ngIf="show">CONTENT</div>
      `,
    };
  })
  ;
