import React, { useState, useContext, createContext } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  concat,
} from '@apollo/client'
import Cookies from 'js-cookie'
import { onError } from "@apollo/client/link/error";

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null)

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(async ({ message }) => {
        console.log(
          message
        )
        if (message === "Could not verify JWT: JWTExpired" && Cookies.get('refresh_token')) {
          console.log(
            "Refreshing token"
          )

          //http://localhost:3000/auth/token/refresh?refresh_token=0cd21047-9f3a-426b-ae8e-be5541a4d933

          const response = await fetch('http://localhost:3000/auth/token/refresh?' + new URLSearchParams({
            refresh_token: Cookies.get('refresh_token'),
          }))

          const json = await response.json()

          console.log(
            "json", json
          )

          // YOU ARE HERE 

          if (json.jwt_token) {
            setAuthToken(json.jwt_token)
          }

          if (json.refresh_token) {
            Cookies.set('refresh_token', json.refresh_token)
          }

        }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
  }

  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  const createApolloClient = () => {
    const authLink = new HttpLink({
      uri: 'http://dev.home.lan:8080/v1/graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link: concat(errorLink, authLink),
      cache: new InMemoryCache(),
    })
  }

  const signIn = async ({ email, password }) => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        cookie: false
      })
    })

    const json = await response.json()

    if (json.jwt_token) {
      setAuthToken(json.jwt_token)
    }

    if (json.refresh_token) {
      Cookies.set('refresh_token', json.refresh_token)
    }
  }

  const signOut = () => {
    setAuthToken(null)
  }

  return {
    setAuthToken,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  }
}
