import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Formular from "../components/formular";
import Anfahrt from "../components/anfahrt";

const Kontakt = ({ data }) => {
  return (
    <Layout>
      <div className="pt-[256px] bg-creme">
        <div className="px-8">
          <h1 className="py-16">{data.contentfulKontakt.ueberschrift}</h1>
          <p className="pb-16">
            {data.contentfulKontakt.beschreibung.beschreibung}
          </p>
          <div className="pb-32">
            <Formular />
          </div>
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
