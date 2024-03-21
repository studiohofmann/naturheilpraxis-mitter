import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

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
      <div className="bg-green px-8 pt-[256px] pb-64">
        <h1 className="py-16">{data.contentfulSchwerpunkte.ueberschrift}</h1>
        <p className="pb-16">
          {data.contentfulSchwerpunkte.beschreibung.beschreibung}
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
                <div>
                  <GatsbyImage
                    className="mb-4 mx-4"
                    image={singleImage}
                    alt={node.title}
                  />

                  <p className="mb-8 px-4">{node.text.text}</p>
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
