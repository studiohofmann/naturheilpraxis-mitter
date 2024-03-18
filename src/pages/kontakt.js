import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Formular from "../components/formular";
import Anfahrt from "../components/anfahrt";

const Kontakt = ({ data }) => {
  return (
    <Layout>
      <div className="bg-lightgray pt-[224px]">
        <h1 className="px-3 pt-32 pb-16">
          {data.contentfulKontakt.ueberschrift}
        </h1>
        <p className="px-3 pb-16">
          {data.contentfulKontakt.beschreibung.beschreibung}
        </p>
        <div className="px-3 pb-32">
          <Formular />
        </div>

        <Anfahrt />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query KontaktQuery {
    contentfulKontakt {
      ueberschrift
      beschreibung {
        beschreibung
      }
    }
  }
`;

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
