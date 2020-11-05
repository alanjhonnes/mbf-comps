import '!style-loader!css-loader!../styles/reset.css';
// import '!style-loader!css-loader!../node_modules/@angular/cdk/overlay-prebuilt.css';
import '!style-loader!css-loader!../styles/overlay-prebuilt.css';
import 'hammerjs';

import { addParameters, addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: {
      desktopMD: {
        name: 'Desktop MD',
        styles: {
          width: '768px',
          height: '800px',
        },
        type: 'desktop',
      },
      desktopLG: {
        name: 'Desktop LG',
        styles: {
          width: '992px',
          height: '800px',
        },
        type: 'desktop',
      },
      desktopLG: {
        name: 'Desktop XL',
        styles: {
          width: '1200px',
          height: '800px',
        },
        type: 'desktop',
      },
      galaxys5: {
        name: 'Galaxy S5',
        styles: {
          width: '360px',
          height: '640px',
        },
        type: 'mobile',
      },
      iphone678: {
        name: 'iPhone 6/7/8',
        styles: {
          width: '375px',
          height: '667px',
        },
        type: 'mobile',
      },
      iphone678Plus: {
        name: 'iPhone 6/7/8 Plus',
        styles: {
          width: '414px',
          height: '736px',
        },
        type: 'mobile',
      },
      iphonex: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px',
        },
        type: 'mobile',
      },
      ipad: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px',
        },
        type: 'tablet',
      },
      ipadPro: {
        name: 'iPad Pro',
        styles: {
          width: '1024px',
          height: '1366px',
        },
        type: 'tablet',
      },
    },
    defaultViewport: 'iphone678',
  },
  backgrounds: {
    default: 'white',
    values: [{
      name: 'white', value: '#ffffff', default: true
    },
    {
      name: 'black', value: '#000000'
    },
    {
      name: 'backdrop', value: '#333333'
    },
    {
      name: 'light-grey', value: '#cccccc'
    },
    {
      name: 'facebook', value: '#3b5998'
    },
    ],
  }
});
