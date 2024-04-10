import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

export default function Aktuelles() {
  const data = useStaticQuery(graphql`
    query BlogpostIndexQuery {
      contentfulAktuelles {
        ueberschrift
        beschreibung {
          raw
        }
      }

      allContentfulBlogpost(limit: 1, sort: { createdAt: DESC }) {
        edges {
          node {
            ueberschrift
            datum
            bild {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
            text {
              text
            }
          }
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
    <div className="bg-gray px-8 pt-16 pb-32 lg:w-3/4 lg:float-right">
      <div className="">
        <h1 className="mb-8">{data.contentfulAktuelles.ueberschrift}</h1>
        <p className="mb-16">
          {renderRichText(data.contentfulAktuelles.beschreibung, options)}
        </p>
      </div>

      {data.allContentfulBlogpost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div>
            <div key={i} className="bg-yellow shadow-xl px-4 pt-4 pb-4">
              <h2 className="pb-4">{node.ueberschrift}</h2>
              <p className="pb-4">{node.datum}</p>

              <GatsbyImage
                className="mb-4"
                image={singleImage}
                alt={node.title}
              />

              <p>{node.text.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
