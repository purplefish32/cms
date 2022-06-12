import {
  ApolloClient,
  ApolloLink,
  fromPromise,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import fetch from "isomorphic-unfetch";

// remove cached token on 401 from the server

const createApolloClient = async () => {
  // let accessToken: string | null = null;

  const requestSession = async () => {
    const res = await fetch(`http://localhost:3000/api/access-token`);

    if (res.ok) {
      const session = await res.json(); // TODO Simplify
      return session;
    }
  };

  const getNewSession = async () => {
    const res = await fetch(`http://localhost:3000/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: oldSession.refreshToken,
      }),
    });

    if (res.ok) {
      const session = await res.json(); // TODO Simplify
      return session;
    }
  };

  const ssrMode = typeof window === "undefined";
  let link;

  const { accessToken } = await requestSession();

  console.log("accessToken", accessToken);

  const httpLink = new HttpLink({
    uri: "http://dev.home.lan:8080/v1/graphql",
    credentials: "include",
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
    fetch,
  });

  /*
  const errorLink = onError(({ networkError }) => {
    console.log("netError", networkError);
    if (
      networkError &&
      networkError.message ===
        "cannot start as connection_init failed with : Could not verify JWT: JWTExpired"
    ) {
      console.log("call refresh endpoint");
      refreshAccessToken();
    } else {
      console.error(networkError);
    }
  });*/

  let isRefreshing = false;
  let pendingRequests: (() => void)[] = [];

  const resolvePendingRequests = () => {
    pendingRequests.map((callback) => callback());
    pendingRequests = [];
  };

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          switch (err.extensions.code) {
            case "invalid-jwt":
              // error code is set to UNAUTHENTICATED
              // when AuthenticationError thrown in resolver
              let forward$;

              console.log("invalid-jwt");

              if (!isRefreshing) {
                isRefreshing = true;
                forward$ = fromPromise(
                  getNewSession()
                    .then(({ accessToken, refreshToken }) => {
                      // Store the new tokens for your auth link
                      resolvePendingRequests();
                      return accessToken;
                    })
                    .catch((error) => {
                      pendingRequests = [];
                      // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                      return;
                    })
                    .finally(() => {
                      isRefreshing = false;
                    })
                ).filter((value) => Boolean(value));
              } else {
                // Will only emit once the Promise is resolved
                forward$ = fromPromise(
                  new Promise<void>((resolve) => {
                    pendingRequests.push(() => resolve());
                  })
                );
              }

              return forward$.flatMap(() => forward(operation));
          }
        }
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        // if you would also like to retry automatically on
        // network errors, we recommend that you use
        // apollo-link-retry
      }
    }
  );

  const wsLink = new GraphQLWsLink(
    createClient({
      url: "ws://dev.home.lan:8080/v1/graphql",
      webSocketImpl: WebSocket,
      connectionParams: {
        authToken: accessToken,
      },
    })
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  if (ssrMode) {
    link = ApolloLink.from([errorLink, httpLink]);
  } else {
    link = ApolloLink.from([errorLink, splitLink]);
    // link = ApolloLink.from([errorLink, httpLink]);
  }

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
