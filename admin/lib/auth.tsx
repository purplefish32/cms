/* eslint-disable require-jsdoc */
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React, { createContext, useContext, useState } from "react";

const authContext = createContext({});

type Session = {
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  user?: any;
};

interface Props {
  children?: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [session, setSession] = useState<Session | null>(null);

  const getNewSession = async (oldSession: Session | null) => {
    const res = await fetch(`http://localhost:4000/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: oldSession?.refreshToken,
      }),
    });

    if (res.ok) {
      return await res.json();
    }
  };

  const isSignedIn = () => {
    if (session) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!session?.accessToken) return null;

    return {
      authorization: `Bearer ${session?.accessToken}`,
    };
  };

  const createApolloClient = () => {
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
                let forward$;
                if (!isRefreshing) {
                  isRefreshing = true;
                  forward$ = fromPromise(
                    getNewSession(session)
                      .then((session: Session) => {
                        // Store the new tokens for your auth link
                        setSession(session);
                        resolvePendingRequests();
                        return;
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
          console.error(`[Network error]: ${networkError}`);
          // if you would also like to retry automatically on
          // network errors, we recommend that you use
          // apollo-link-retry
        }
      }
    );

    const httpLink = new HttpLink({
      uri: "http://dev.home.lan:8080/v1/graphql",
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link: ApolloLink.from([errorLink, httpLink]),
      cache: new InMemoryCache(),
    });
  };

  const signIn = async (email: string, password: string) => {
    const response = await fetch(
      "http://dev.home.lan:4000/signin/email-password", // TODO HTTPS!
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const json = await response.json();

    if (json.session) {
      setSession(json.session);
    }
  };

  const signOut = (): void => {
    setSession(null);
  };

  return {
    setSession,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
