import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import "semantic-ui-css/semantic.min.css";
import { useApollo } from "../lib/apolloClient";
import { AuthProvider } from "../lib/auth.js";
import "../styles/globals.css";

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
