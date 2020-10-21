import {ApolloClient,InMemoryCache,createHttpLink,ApolloLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error'

//
const httpLink =  createHttpLink({
  uri: 'http://localhost:4000/graphql',
  // credentials: 'same-origin'
});

// customize the error return by server
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.log(
      `[Network error ${operation.operationName}]: ${networkError.message}`
    );
  }
});

const client = new ApolloClient({
	cache:new InMemoryCache(),
	link:ApolloLink.from([errorLink,httpLink]),
})
export default client;