import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  User: PublicUser;
  UserLogin: LoginResponse;
  UserFlag: UserFlag;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUserLoginArgs = {
  userAuth: UserAuthInput;
};


export type QueryUserFlagArgs = {
  username: Scalars['String'];
};

export type PublicUser = {
  __typename?: 'PublicUser';
  name: Scalars['String'];
  username: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  flags: UserFlag;
  id: Scalars['Float'];
};


export type UserFlag = {
  __typename?: 'UserFlag';
  id: Scalars['Float'];
  isAdmin: Scalars['Boolean'];
  isModerator: Scalars['Boolean'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  jwt: Scalars['String'];
};

export type UserAuthInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: LoginResponse;
  deleteUser: PublicUser;
};


export type MutationAddUserArgs = {
  user: UserInput;
};


export type MutationDeleteUserArgs = {
  username: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type Unnamed_1_MutationVariables = Exact<{
  user: UserInput;
}>;


export type Unnamed_1_Mutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'jwt'>
  ) }
);
