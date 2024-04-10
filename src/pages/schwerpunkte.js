import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Schwerpunkte = ({ data }) => {
  const [isOpen, setIsOpen] = useState({});
  const toggleOpen = (ueberschrift) => {
    setIsOpen({
      ...isOpen,
      [ueberschrift]: !isOpen[ueberschrift],
    });
  };

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
      <div className="bg-gray px-8 pt-[256px] lg:pt-0 pb-32 lg:w-3/4 lg:float-right">
        <h1 className="py-16">{data.contentfulSchwerpunkte.ueberschrift}</h1>
        <p className="pb-16">
          {renderRichText(data.contentfulSchwerpunkte.beschreibung, options)}
        </p>

        {data.allContentfulSchwerpunktepost.edges.map(({ node }, i) => {
          const singleImage = getImage(node.bild);
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
                <div className="bg-yellow shadow-xl pt-4 mb-4">
                  <GatsbyImage
                    className="mx-4"
                    image={singleImage}
                    alt={node.title}
                  />

                  <p className="px-4 py-4">{node.text.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SchwerpunkteQuery {
    contentfulSchwerpunkte {
      ueberschrift
      beschreibung {
        raw
      }
    }
    allContentfulSchwerpunktepost {
      edges {
        node {
          ueberschrift
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
`;

export default Schwerpunkte;

export const Head = () => <title>Schwerpunkte</title>;
