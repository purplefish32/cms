import { ApolloProvider } from "@apollo/client";
import router from "next/router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createApolloClient } from "../../lib/apolloClient";

interface AuthContextInterface {
  session: any;
  signInEmailPassword: (email: string, password: string) => Promise<void>;
}

// create contexts
const AuthContext = createContext<AuthContextInterface | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  const signInEmailPassword = async (
    email: string,
    password: string
  ): Promise<void> => {
    const response = await fetch(
      "http://localhost:4000/signin/email-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const { session } = await response.json();

    setSession(session);
  };

  return (
    <AuthContext.Provider value={{ session, signInEmailPassword }}>
      <ApolloProvider client={createApolloClient(session?.accessToken)}>
        {children}
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  // get the context
  const context = useContext(AuthContext);
  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
