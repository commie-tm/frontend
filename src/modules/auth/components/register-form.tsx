import '../scss/register-form.scss';

import * as React from 'react';
import { Typography, TextField, Button, Paper, InputAdornment } from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  AccountBoxSharp as AccountBoxIcon,
  Security as SecurityIcon,
  Email as EmailIcon
} from '@material-ui/icons';

export interface RegisterFormProps {
  setUsername: (val: string) => any;
  setPassword: (val: string) => any;
  setEmail: (val: string) => any;
  setName: (val: string) => any;

  username: string;
  password: string;
  email: string;
  name: string;

  onSubmit: () => void;
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = (props: RegisterFormProps): JSX.Element => {
  return (
    <Paper
      className="register-form"
    >
      <Typography variant="h4" gutterBottom>
        Register for Commie
      </Typography>
      <form onSubmit={ev => { ev.preventDefault(); props.onSubmit(); }} className="form">
        <TextField
          value={props.name}
          label="Display Name"
          fullWidth
          onChange={ev => props.setName(ev.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
          placeholder="John Doe"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            )
          }}
        />
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
                <AccountBoxIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          value={props.password}
          label="Password"
          fullWidth
          onChange={ev => props.setPassword(ev.target.value)}
          type="password"
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
        <TextField
          value={props.email}
          label="EMail"
          fullWidth
          onChange={ev => props.setEmail(ev.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
          placeholder="john@email.com"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            )
          }}
        />
        <div className="flex-grow" />
        <div className="submit-button-container">
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Register
          </Button>
        </div>
      </form>
    </Paper>
  )
}
