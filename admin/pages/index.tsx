import React from "react";
import { withApollo } from "../lib/withApollo";
import Layout from "../src/components/Layout";

/**
 * HomePage: The Home Page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const HomePage = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default withApollo()(HomePage);
