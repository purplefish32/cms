/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { AuthProvider } from "../src/hooks/use-auth";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthProvider>
      <MantineProvider
        // theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider position="top-right">
          <Head>
            <title>My App</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </AuthProvider>
  );
}
