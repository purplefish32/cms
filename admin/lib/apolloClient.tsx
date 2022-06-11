import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import fetch from "isomorphic-unfetch";
import { SubscriptionClient } from "subscriptions-transport-ws";

let accessToken: string | null = null;

const requestAccessToken = async () => {
  if (accessToken) return;
  const res = await fetch(`/api/access-token`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = "public";
  }
};

// remove cached token on 401 from the server
const resetTokenLink = onError(({ networkError }) => {
  if (
    networkError &&
    networkError.name === "ServerError" // &&
    // networkError.statusCode === 401 // TODO
  ) {
    accessToken = null;
  }
});

const createHttpLink = (headers: any) => {
  const httpLink = new HttpLink({
    uri: "http://graphql-engine:8080/v1/graphql",
    credentials: "include",
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};

const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient("ws://dev.home.lan:8080/v1/graphql", {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken(); // happens on the client
        return {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        };
      },
    })
  );
};

// eslint-disable-next-line require-jsdoc
export default function createApolloClient(
  initialState: NormalizedCacheObject | null,
  headers: {} | undefined
) {
  const ssrMode = typeof window === "undefined";
  let link;
  if (ssrMode) {
    link = createHttpLink(headers);
  } else {
    link = createWSLink();
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState!),
  });
}
function AuthContext(AuthContext: any) {
  throw new Error("Function not implemented.");
}
