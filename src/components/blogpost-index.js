import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogpostIndex() {
  const data = useStaticQuery(graphql`
    query BlogpostIndexQuery {
      contentfulAktuelles {
        ueberschrift
        beschreibung {
          beschreibung
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

  return (
    <div className="bg-cyan-200 pt-20 pb-40">
      <div className="mx-4">
        <h1 className="mb-4">{data.contentfulAktuelles.ueberschrift}</h1>
        <p>{data.contentfulAktuelles.beschreibung.beschreibung}</p>
      </div>

      {data.allContentfulBlogpost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div className="mx-4 mt-20 p-4 rounded-md bg-gradient-to-l from-lime-50 to-lime-100 shadow-lg">
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
