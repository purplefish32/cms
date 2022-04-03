import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { AuthProvider, useAuth } from "../lib/auth.js";
import { ApolloProvider } from "@apollo/client";
import router from "next/router";
import { useApollo } from "../lib/apolloClient";
import "rsuite/dist/rsuite.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const apolloClient = useApollo(pageProps.initialApolloState, "TOKENXXXX");
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>My App</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  );
}
