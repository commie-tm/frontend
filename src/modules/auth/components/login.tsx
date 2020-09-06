import * as React from 'react';
import '../scss/login.scss';
import { teal } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import { LoginForm } from './login-form';

export const Login: React.FunctionComponent<Record<string, unknown>> = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm
          password={password}
          username={username}
          setPassword={val => setPassword(val)}
          setUsername={val => setUsername(val)}
          onSubmit={() => {}}
        />
        <Typography className="open-source-notice">
          This project is open source 
          at <a href="https://github.com/commie-tm" target="_blank" rel="noreferrer">GitHub/commie-tm</a>
        </Typography>
      </div>
      <div className="illustration-container" style={{ background: teal[500] }}>
        <img className="login-illustration" src="/assets/illustrations/undraw_authentication.svg" />
        <Typography className="hint-text" variant="body1">
          Log in to Commie to connect with your comrades.
        </Typography>
      </div>
    </div>
  );
};
