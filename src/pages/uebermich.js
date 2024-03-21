import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Uebermich = ({ data }) => {
  return (
    <Layout>
      <div className="px-8 pt-[256px] pb-64 bg-creme">
        <h1 className="py-16">{data.contentfulUebermich.ueberschrift}</h1>
        <GatsbyImage
          className="mb-8"
          image={data.contentfulUebermich.bild.gatsbyImageData}
          alt={data.contentfulUebermich.bild.title}
        />
        <p>{data.contentfulUebermich.text.text}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query UebermichQuery {
    contentfulUebermich {
      ueberschrift
      bild {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
        title
      }
      text {
        text
      }
    }
  }
`;

export default Uebermich;

export const Head = () => <title>Praxis Mitter - Über mich</title>;
