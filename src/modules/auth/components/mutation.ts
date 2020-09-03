import gql from 'graphql-tag';

export const MUTATION_USER_REGISTER = gql`
mutation($user:UserInput!) {
  addUser(user:$user) {
    jwt
  }
}
`;
