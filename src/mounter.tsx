import * as React from 'react';
import { render } from 'react-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { Splash } from './modules/splash/components/splash';
import { Index } from './modules/index/components';

render((
  <Index />
), document.querySelector('[data-mount]'));
