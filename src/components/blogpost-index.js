import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogpostIndex() {
  const data = useStaticQuery(graphql`
    query BlogpostIndexQuery {
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
    <div>
      {data.allContentfulBlogpost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div className="mx-4 mt-40 mb-40 p-6 rounded-md bg-gradient-to-l from-amber-50 to-stone-300 shadow-lg">
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
