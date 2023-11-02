import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="h-96">
        <h1>{data.allContentfulBlog.edges.text}</h1>
        <div>{data.allContentfulBlog.edges.text}</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
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
