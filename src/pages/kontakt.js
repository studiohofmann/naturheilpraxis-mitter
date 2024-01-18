import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Formular from "../components/formular";
import Map from "../components/map";

const Kontakt = ({ data }) => {
  return (
    <Layout>
      <div className="bg-stone-300">
        <div className="px-5 pt-80 pb-40">
          <h1 className="mb-5">{data.contentfulKontakt.ueberschrift}</h1>
          <p className="mb-10 text-justify">
            {data.contentfulKontakt.beschreibung.beschreibung}
          </p>
          <Formular />
        </div>
      </div>
      <div className="bg-amber-50">
        <div className="px-5 py-40">
          <h1 className="mb-5">{data.contentfulKontakt.anfahrtueberschrift}</h1>
          <p className="text-justify mb-10">
            {data.contentfulKontakt.anfahrtbeschreibung.anfahrtbeschreibung}
          </p>
          <Map />
        </div>
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
      anfahrtueberschrift
      anfahrtbeschreibung {
        anfahrtbeschreibung
      }
    }
  }
`;

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
