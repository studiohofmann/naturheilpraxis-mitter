import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Uebermich = ({ data }) => {
  return (
    <Layout>
      <div className="bg-teal-200 pt-80 pb-40">
        <div className="px-5">
          <h1 className="mb-4">{data.contentfulUebermich.ueberschrift}</h1>
          <GatsbyImage
            className="mb-4"
            image={data.contentfulUebermich.bild.gatsbyImageData}
            alt={data.contentfulUebermich.bild.title}
          />
          <p>{data.contentfulUebermich.text.text}</p>
        </div>
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

export const Head = () => <title>Uebermich</title>;
