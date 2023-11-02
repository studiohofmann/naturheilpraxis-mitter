import * as React from "react";
import Layout from "../components/layout/layout";
import Contactform from "../components/contactform";

const Contact = () => {
  return (
    <Layout pageTitle="Kontakt">
      <Contactform />
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Kontakt</title>;
