import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Blogpost from "../components/blogpost";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="bg-lime-200 pt-60">
        {data.allContentfulContentType.edges.map(({ node }, i) => {
          return (
            <div className="mx-6">
              <h1 className="mb-6">{node.name}</h1>
              <p className="text-justify mb-12">{node.description}</p>
            </div>
          );
        })}
        <Blogpost />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allContentfulContentType(filter: { name: { eq: "Blog" } }) {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

export default Blog;

export const Head = () => <title>Blog</title>;
