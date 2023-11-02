import * as React from "react";
import Layout from "../components/layout/layout";
import Heroimage from "../components/index/heroimage";
import Introduction from "../components/index/introduction";
import About from "../components/about";
import Blog from "../components/blog";

const Index = () => {
  return (
    <div>
      <Layout>
        <Heroimage />
        <Introduction />
        <About />
        <Blog />
      </Layout>
    </div>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
