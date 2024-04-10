import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Uebermich = ({ data }) => {
  const options = {
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        let anchorAttrs = {};

        if (!node.data.uri.includes("my-domain-name.com")) {
          anchorAttrs = {
            target: "_blank",
            rel: "noopener noreferrer",
          };
        }
        return (
          <a href={node.data.uri} {...anchorAttrs}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <Layout>
      <div className="px-8 pt-[256px] lg:pt-0 pb-32 bg-gray lg:w-3/4 lg:float-right">
        <h1 className="py-16">{data.contentfulUebermich.ueberschrift}</h1>
        <GatsbyImage
          className="mb-8 shadow-lg"
          image={data.contentfulUebermich.bild.gatsbyImageData}
          alt={data.contentfulUebermich.bild.title}
        />
        <p> {renderRichText(data.contentfulUebermich.beschreibung, options)}</p>
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
      beschreibung {
        raw
      }
    }
  }
`;

export default Uebermich;

export const Head = () => <title>Praxis Mitter - Über mich</title>;
