import * as React from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { Splash } from '../../splash/components/splash';
import '../scss/index.scss';

export class Index extends React.Component<Record<string, unknown>> {
  public render() {
    return (
      <Provider theme={defaultTheme}>
        <Splash />
      </Provider>
    )
  }
}