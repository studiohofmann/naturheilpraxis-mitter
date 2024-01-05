import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Blogpost() {
  const data = useStaticQuery(graphql`
    query BlogpostQuery {
      allContentfulContentType(filter: { name: { eq: "Blog" } }) {
        edges {
          node {
            name
          }
        }
      }

      allContentfulBlog(limit: 1, sort: { date: ASC }) {
        edges {
          node {
            header
            text {
              text
            }
            image {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
            date
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
          <div className="pt-48 mx-6">
            <h1 className="text-center">
              {data.allContentfulContentType.edges.name}
            </h1>

            <div key={i}>
              <h2 className="mb-3">{node.header}</h2>
              <div className="mb-3">{node.date}</div>

              <GatsbyImage
                className="mb-3"
                image={singleImage}
                alt={node.title}
              />

              <p className="mb-9">{node.text.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
