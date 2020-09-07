import * as React from 'react';
import { Route } from 'react-router-dom';

export interface ProtectedRouteProps {
  path: string;
  children: JSX.Element;
}

export const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = (props: ProtectedRouteProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoggedIn(Boolean(window.localStorage.getItem('session-jwt')));
  });

  if (isLoggedIn) return (
    <Route path={props.path}>
      401 Not authorized
    </Route>
  );

  return (
    <Route path={props.path}>
      {props.children}
    </Route>
  );
};
