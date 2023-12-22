import * as React from "react";
import Layout from "../components/layout/layout";
import Kontakt from "../components/kontakt";
import Map from "../components/contact/map";

const Contact = () => {
  return (
    <Layout pageTitle="Kontakt">
      <Kontakt />
      <Map />
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Kontakt</title>;
