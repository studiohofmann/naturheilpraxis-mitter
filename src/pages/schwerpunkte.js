import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Schwerpunkte = ({ data }) => {
  const [isOpen, setIsOpen] = useState({});
  const toggleOpen = (ueberschrift) => {
    setIsOpen({
      ...isOpen,
      [ueberschrift]: !isOpen[ueberschrift],
    });
  };

  return (
    <Layout>
      <div className="bg-gray-400 py-32">
        <h1 className="mb-4">{data.contentfulSchwerpunkte.ueberschrift}</h1>
        <p className="mb-40 text-justify ">
          {data.contentfulSchwerpunkte.beschreibung.beschreibung}
        </p>
        <div className="px-5">
          {data.allContentfulSchwerpunktepost.edges.map(({ node }, i) => {
            const singleImage = getImage(node.bild);
            return (
              <div key={i}>
                <h1
                  onClick={() => {
                    toggleOpen(node.ueberschrift);
                  }}
                >
                  <div className="flex">
                    <div className="text-blue-500 bg-green-300 hover:bg-blue-700 hover:text-gray-100 duration-500 w-full mb-3">
                      {node.ueberschrift}
                    </div>
                    <div>{isOpen[node.ueberschrift] ? "" : ""}</div>
                  </div>
                </h1>

                {isOpen[node.ueberschrift] && (
                  <div>
                    <GatsbyImage
                      className="mb-6"
                      image={singleImage}
                      alt={node.title}
                    />

                    <p className="text-gray-100 pb-5">{node.text.text}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SchwerpunkteQuery {
    contentfulSchwerpunkte {
      ueberschrift
      beschreibung {
        beschreibung
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
