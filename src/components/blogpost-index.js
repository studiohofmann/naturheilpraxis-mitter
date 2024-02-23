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
    <div className="bg-green-200 py-36 p-6">
      <div className="">
        <h1 className="mb-3">{data.contentfulAktuelles.ueberschrift}</h1>
        <p className="mb-12">
          {data.contentfulAktuelles.beschreibung.beschreibung}
        </p>
      </div>

      {data.allContentfulBlogpost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div>
            <div key={i}>
              <h2 className="mb-3">{node.ueberschrift}</h2>
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
