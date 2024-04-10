import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Formular from "../components/formular";
import Anfahrt from "../components/anfahrt";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Kontakt = ({ data }) => {
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
      <div className="pt-[256px] lg:pt-0 bg-gray lg:w-3/4 lg:float-right">
        <div className="px-8">
          <h1 className="py-16">{data.contentfulKontakt.ueberschrift}</h1>
          <p className="pb-16">
            {renderRichText(data.contentfulKontakt.beschreibung, options)}
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
        raw
      }
    }
  }
`;

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
