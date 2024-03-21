import * as React from "react";
import Layout from "../components/layout/layout";
import Startbild from "../components/startbild";
import Termin from "../components/termin";
import Leistungen from "../components/leistungen";
import Aktuelles from "../components/aktuelles";

const Index = () => {
  return (
    <Layout>
      <Startbild />
      <Termin />
      <Leistungen />
      <Aktuelles />
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Home</title>;
