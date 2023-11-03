import * as React from "react";
import Layout from "../components/layout/layout";
import Heroimage from "../components/index/heroimage";
import Introduction from "../components/index/introduction";
import About from "../components/about";

const Index = () => {
  return (
    <Layout>
      <Introduction />
      <Heroimage />
      <About />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
