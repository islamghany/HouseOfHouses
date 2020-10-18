// Import gql helper to construct GraphQL schema.
import { gql } from 'apollo-server-express';

// Import every part of schema.
import user from './user';
import listing from './listing';
import booking from './booking';

// Define linkSchema that bonds all schemas together.
const root = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

// Export all schemas as an array.
export default [
  root,
  user,
  listing,
  booking,
];
