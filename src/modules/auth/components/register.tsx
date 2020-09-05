import '../scss/register.scss';

import { useMutation } from '@apollo/client';
import * as React from 'react';
import { colors, Typography } from '@material-ui/core';

import {
  Unnamed_1_MutationVariables as RegisterMutationVars,
  Unnamed_1_Mutation as RegisterResponse
} from '../../../generated/graphql';
import { MUTATION_USER_REGISTER } from './register-mutation';
import { RegisterForm } from './register-form';
import { Redirect } from 'react-router-dom';


export const Register: React.FunctionComponent<Record<string, unknown>> = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  const [ register, { data } ] = useMutation<RegisterResponse, RegisterMutationVars>(MUTATION_USER_REGISTER, {
    variables: {
      user: {
        username,
        password,
        email,
        name
      }
    }
  });

  if (data) {
    window.localStorage.setItem('session-token', data.addUser.jwt);
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className="register-page">
      <section className="illustration-container" style={{ background: colors.yellow[400] }}>
          <img
            src="/assets/illustrations/undraw_card.svg"
            alt="User register illustration"
            className="register-illustration"
          />
          <div className="hint-text">
            Register for an account today to start using the
            next-gen service of Commie.
          </div>
      </section>
      <section className="form-container">
        <RegisterForm
          setUsername={val => setUsername(val)} username={username}
          setPassword={val => setPassword(val)} password={password}
          setName={val => setName(val)} name={name}
          setEmail={val => setEmail(val)} email={email}
          onSubmit={register}
        />
        <Typography className="open-source-notice">
          This project is open source 
          at <a href="https://github.com/commie-tm" target="_blank" rel="noreferrer">GitHub/commie-tm</a>
        </Typography>
      </section>
    </section>
  )
}
