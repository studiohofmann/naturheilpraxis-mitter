import * as React from "react";
import Layout from "../components/layout/layout";
import Heroimage from "../components/index/heroimage";
import Introduction from "../components/index/introduction";
import Services from "../components/services";
import Contactform from "../components/contact/contactform";

const Index = () => {
  return (
    <Layout>
      <Introduction />
      <Heroimage />
      <Services />
      <Contactform />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
