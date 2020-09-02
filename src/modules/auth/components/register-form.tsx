import '../scss/register-form.scss';

import { Heading, View } from '@adobe/react-spectrum';
import * as React from 'react';

export interface RegisterFormProps {
  setUsername: (ev: React.ChangeEvent<HTMLInputElement>) => any;
  setPassword: (ev: React.ChangeEvent<HTMLInputElement>) => any;
  setEmail: (ev: React.ChangeEvent<HTMLInputElement>) => any;
  setName: (ev: React.ChangeEvent<HTMLInputElement>) => any;
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = (props: RegisterFormProps): JSX.Element => {
  return (
    <View
      padding="size-300"
      borderWidth="thin"
      borderRadius="regular"
      borderColor="dark"
    >
      <div className="inner-form-container">
        <Heading level={1}>
          Register for Commie
        </Heading>
      </div>
    </View>
  )
}
