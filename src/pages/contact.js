import * as React from "react";
import Layout from "../components/layout/layout";
import Contactform from "../components/contact/contactform";
import Map from "../components/contact/map";

const Contact = () => {
  return (
    <Layout pageTitle="Kontakt">
      <Contactform />
      <Map />
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Kontakt</title>;
