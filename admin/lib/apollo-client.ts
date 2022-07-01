import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://dev.home.lan:8080/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
