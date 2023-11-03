import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";

const Blog = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulBlog.edges.map(({ node }, i) => {
        const singleImage = getImage(node.image);
        return (
          <div className="">
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
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allContentfulContentType(filter: { name: { eq: "Blog" } }) {
      edges {
        node {
          name
        }
      }
    }

    allContentfulBlog {
      edges {
        node {
          header
          date
          image {
            gatsbyImageData
            title
          }
          text {
            text
          }
        }
      }
    }
  }
`;

export default Blog;

export const Head = () => <title>Blog</title>;
