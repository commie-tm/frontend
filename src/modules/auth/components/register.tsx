import '../scss/register.scss';

import { useQuery } from '@apollo/client';
import * as React from 'react';

import { PublicUser, Unnamed_1_MutationVariables as RegisterMutationVars } from '../../../generated/graphql';
import { MUTATION_USER_REGISTER } from './mutation';
import { RegisterForm } from './register-form';

export const Register: React.FunctionComponent<Record<string, unknown>> = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  const [registerStatus, setRegisterStatus] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const registerRequest = (): void => {
    const { data, error, loading } = useQuery<PublicUser, RegisterMutationVars>(MUTATION_USER_REGISTER, {
      variables: {
        user: {
          username,
          password,
          email,
          name
        }
      }
    });

    if (error) {
      setRegisterStatus(false);
      setError(error.message);
      return;
    }

    if (!data) {
      setError('Unknown error');
      return;
    }

    setRegisterStatus(true);
  }

  return (
    <section className="register-page">
      <RegisterForm
        setUsername={ev => setUsername(ev.target.value)}
        setPassword={ev => setPassword(ev.target.value)}
        setName={ev => setName(ev.target.value)}
        setEmail={ev => setEmail(ev.target.value)}
      />
    </section>
  )
}
