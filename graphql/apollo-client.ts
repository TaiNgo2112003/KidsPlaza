// apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://mock-graphql-server-tqzn.onrender.com',

  cache: new InMemoryCache(),
});

export default client;
