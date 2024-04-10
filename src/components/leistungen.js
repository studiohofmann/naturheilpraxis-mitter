import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

export default function Leistungen() {
  const data = useStaticQuery(graphql`
    query LeistungenQuery {
      allContentfulLeistungenpost(sort: { reihenfolge: DESC }) {
        edges {
          node {
            ueberschrift
            text {
              text
            }
          }
        }
      }
      contentfulLeistungen {
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

  const [isOpen, setIsOpen] = useState({});
  const toggleOpen = (ueberschrift) => {
    setIsOpen({
      ...isOpen,
      [ueberschrift]: !isOpen[ueberschrift],
    });
  };

  return (
    <div className="bg-yellow px-8 pt-16 pb-32 -mb-2 lg:w-3/4 lg:float-right">
      <h1 className="pb-8">{data.contentfulLeistungen.ueberschrift} </h1>
      <p className="pb-16">
        {renderRichText(data.contentfulLeistungen.beschreibung, options)}
      </p>
      <div className="clear-both"></div>

      {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
        return (
          <div key={i}>
            <h2
              onClick={() => {
                toggleOpen(node.ueberschrift);
              }}
            >
              <a className="flex justify-between mb-4">
                {node.ueberschrift}
                {isOpen[node.ueberschrift] ? (
                  <IoIosClose className="text-3xl shrink-0" />
                ) : (
                  <IoIosAdd className="text-3xl shrink-0" />
                )}
              </a>
            </h2>

            {isOpen[node.ueberschrift] && (
              <p className="bg-gray shadow-lg mb-4 py-4 px-4">
                {node.text.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
