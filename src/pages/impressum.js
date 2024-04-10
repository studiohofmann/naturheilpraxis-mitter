import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Impressum = ({ data }) => {
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
      <div>
        <div className="px-8 bg-gray pt-[256px]">
          <h1 className="py-16">{data.contentfulImpressum.titel}</h1>
          <div>{renderRichText(data.contentfulImpressum.info, options)}</div>
        </div>
        <div className="px-8 bg-yellow">
          <h1 className="py-16">
            {data.contentfulImpressum.rechtlichesUeberschrift}
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ImpressumQuery {
    contentfulImpressum {
      titel
      info {
        raw
      }

      rechtlichesUeberschrift
    }
  }
`;

export default Impressum;

export const Head = () => <title>Impressum</title>;
