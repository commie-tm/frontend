import '../scss/index.scss';

import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import applicationConfig from '../../../../config.json';
import { Register } from '../../auth/components/register';
import { Splash } from '../../splash/components/splash';

const client = new ApolloClient({
  uri: applicationConfig.GRAPHQL_SCHEMA,
  cache: new InMemoryCache()
});

export class Index extends React.Component<Record<string, unknown>> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Provider theme={defaultTheme}>
          <Router>
            <Switch>
              <Route path='/' exact>
                <Splash />
              </Route>
              <Route path='/register' exact>
                <Register />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </ApolloProvider>
    )
  }
}