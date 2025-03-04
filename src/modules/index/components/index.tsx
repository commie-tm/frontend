import '../scss/index.scss';

import { MuiThemeProvider } from '@material-ui/core';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import applicationConfig from '../../../../config.json';
import { Register } from '../../auth/components/register';
import { Splash } from '../../splash/components/splash';
import { getTheme } from './mui-theme';
import { Login } from '../../auth/components/login';
import { ProtectedRoute } from './protected-route';
import { Dashboard } from '@material-ui/icons';

const client = new ApolloClient({
  uri: applicationConfig.GRAPHQL_SCHEMA,
  cache: new InMemoryCache()
});

export class Index extends React.Component<Record<string, unknown>> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={getTheme("dark")}>
          <Router>
            <Switch>
              <Route path='/' exact>
                <Splash />
              </Route>
              <Route path='/register' exact>
                <Register />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <ProtectedRoute path='/dashboard'>
                <Dashboard />
              </ProtectedRoute>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    )
  };
}
