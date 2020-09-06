import * as React from 'react';
import { Typography, TextField, InputAdornment, Paper, Button } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, Security as SecurityIcon } from '@material-ui/icons';
import '../scss/login-form.scss';

export interface LoginFormProps {
  username: string;
  password: string;
  setUsername: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: () => void;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props: LoginFormProps): JSX.Element => {
  return (
    <Paper className="login-form">
      <Typography variant="h4" gutterBottom>
        Log in to Commie
      </Typography>
      <form className="form" onSubmit={ev => {
        ev.preventDefault();
        props.onSubmit();
      }}>
        <TextField
          value={props.username}
          label="Username"
          fullWidth
          onChange={ev => props.setUsername(ev.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
          placeholder="JohnDoe1337"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          value={props.password}
          label="Password"
          fullWidth
          onChange={ev => props.setPassword(ev.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
          placeholder="***********"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SecurityIcon />
              </InputAdornment>
            )
          }}
        />
        <div className="flex-grow" />
        <div className="submit-button-container">
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </Paper>
  )
}
