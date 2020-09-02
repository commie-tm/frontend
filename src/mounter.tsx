import * as React from 'react';
import { render } from 'react-dom';
import { Index } from './modules/index/components';

render((
  <Index />
), document.querySelector('[data-mount]'));
