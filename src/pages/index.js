import * as React from "react";
import Layout from "../components/layout/layout";
import Startbild from "../components/startbild";
import Leistungen from "../components/leistungen";

const Index = () => {
  return (
    <Layout>
      <Startbild />
      <Leistungen />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
