import * as React from "react";
import Layout from "../components/layout/layout";
import Landingpage from "../components/landingpage";
import Services from "../components/services";
import Kontakt from "../components/kontakt";

const Index = () => {
  return (
    <Layout>
      <Landingpage />
      <Services />
      <Kontakt />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
