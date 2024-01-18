import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogpostIndex() {
  const data = useStaticQuery(graphql`
    query BlogpostIndexQuery {
      allContentfulBlog(limit: 1, sort: { createdAt: DESC }) {
        edges {
          node {
            header
            date
            image {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
              title
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
      {data.allContentfulBlog.edges.map(({ node }, i) => {
        const singleImage = getImage(node.image);
        return (
          <div className="mx-6 mt-12 p-6 rounded-md bg-gradient-to-l from-amber-50 to-stone-300 shadow-lg">
            <div key={i}>
              <h2 className="2">{node.header}</h2>
              <p className="mb-6">{node.date}</p>

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
