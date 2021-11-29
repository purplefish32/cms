import React, { useState, useContext, createContext } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null)

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
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
  }
}
