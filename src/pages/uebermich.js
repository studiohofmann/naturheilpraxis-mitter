import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Uebermich = ({ data }) => {
  return (
    <Layout>
      <div className="px-3 pt-[224px] pb-64 bg-lightgray">
        <GatsbyImage
          className="mt-32 mb-16"
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
