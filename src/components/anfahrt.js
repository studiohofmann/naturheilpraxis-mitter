import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Map from "./map";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

export default function Anfahrt() {
  const data = useStaticQuery(graphql`
    query AnfahrtQuery {
      contentfulAnfahrt {
        ueberschrift
        beschreibung {
          raw
        }
      }
    }
  `);

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
    <div className="bg-yellow pb-32">
      <div className="px-8">
        <h1 className="py-16">{data.contentfulAnfahrt.ueberschrift}</h1>
        <p className="pb-16">
          {renderRichText(data.contentfulAnfahrt.beschreibung, options)}
        </p>
      </div>
      <Map />
    </div>
  );
}
