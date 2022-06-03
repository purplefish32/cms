import router from "next/router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface AuthContextInterface {
  session: any; // TODO
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
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { session } = await response.json();

    setSession(session);
  };

  return (
    <AuthContext.Provider value={{ session, signInEmailPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextInterface | null => {
  // get the context
  const context = useContext(AuthContext);
  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
