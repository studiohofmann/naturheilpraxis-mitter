import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

function Impressum({ data }) {
  return (
    <Layout>
      <div>
        <div className="px-8 bg-gray pt-[256px]">
          <h1 className="py-16">{data.contentfulImpressum.titel}</h1>
          <p className="w-2/3 pb-16">{data.contentfulImpressum.info.info}</p>
        </div>
        <div className="px-8 bg-yellow">
          <h1 className="py-16">
            {data.contentfulImpressum.rechtlichesUeberschrift}
          </h1>
          <p className="pb-32">
            {data.contentfulImpressum.rechtliches.rechtliches}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ImpressumQuery {
    contentfulImpressum {
      titel
      info {
        info
      }
      rechtlichesUeberschrift
      rechtliches {
        rechtliches
      }
    }
  }
`;

export default Impressum;

export const Head = () => <title>Impressum</title>;
