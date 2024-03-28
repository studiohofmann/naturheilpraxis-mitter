import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Blogpost() {
  const data = useStaticQuery(graphql`
    query BlogpostQuery {
      allContentfulBlogpost {
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
          <div key={i} className="bg-yellow shadow-lg px-4 pt-4 pb-8 mb-8">
            <h2 className="pb-4">{node.ueberschrift}</h2>
            <p className="pb-8">{node.datum}</p>

            <GatsbyImage
              className="mb-4"
              image={singleImage}
              alt={node.title}
            />

            <p className="">{node.text.text}</p>
          </div>
        );
      })}
    </div>
  );
}
