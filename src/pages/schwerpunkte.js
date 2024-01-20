import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Schwerpunktepost from "../components/schwerpunktepost";

const Schwerpunkte = ({ data }) => {
  return (
    <Layout>
      <div className="bg-teal-200 py-80">
        <div className="mx-4">
          <h1 className="mb-4">{data.contentfulSchwerpunkte.ueberschrift}</h1>
          <p className="mb-40 text-justify ">
            {data.contentfulSchwerpunkte.beschreibung.beschreibung}
          </p>
        </div>
        <Schwerpunktepost />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SchwerpunkteQuery {
    contentfulSchwerpunkte {
      ueberschrift
      beschreibung {
        beschreibung
      }
    }
  }
`;

export default Schwerpunkte;

export const Head = () => <title>Schwerpunkte</title>;
