import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

export default function Newsletter() {
  const data = useStaticQuery(graphql`
    query NewsletterQuery {
      contentfulNewsletter {
        titel
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
    <div className="lg:pr-4">
      <h2 className="pb-8">{data.contentfulNewsletter.titel}</h2>
      <p className="pb-8">
        {renderRichText(data.contentfulNewsletter.beschreibung, options)}
      </p>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Email"
          className="w-full"
        />

        <button type="submit">abonnieren</button>
      </div>
    </div>
  );
}
