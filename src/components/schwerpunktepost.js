import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Schwerpunktepost() {
  const data = useStaticQuery(graphql`
    query SchwerpunktepostQuery {
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
  `);

  return (
    <div>
      {data.allContentfulSchwerpunktepost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div className="mx-6 mt-12 p-6 rounded-md bg-gradient-to-l from-amber-50 to-stone-300 shadow-lg">
            <div key={i}>
              <h2 className="2">{node.ueberschrift}</h2>
              <p className="mb-6">{node.datum}</p>

              <GatsbyImage
                className="mb-6"
                image={singleImage}
                alt={node.title}
              />

              <p className="">{node.text.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
