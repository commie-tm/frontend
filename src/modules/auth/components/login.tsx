import * as React from 'react';
import '../scss/login.scss';
import { teal } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

export const Login: React.FunctionComponent<Record<string, unknown>> = (): JSX.Element => {
  return (
    <div className="login-page">
      <div className="form-container"></div>
      <div className="illustration-container" style={{ background: teal[500] }}>
        <img className="login-illustration" src="/assets/illustrations/undraw_authentication.svg" />
        <Typography className="hint-text" variant="body1">
          Log in to Commie to connect with your comrades.
        </Typography>
      </div>
    </div>
  );
};
