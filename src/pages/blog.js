import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Blogpost from "../components/blogpost";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="px-3 bg-lightgray pt-[224px]">
        <h1 className="pt-32 pb-16">{data.contentfulBlog.ueberschrift}</h1>
        <p className="mb-16">{data.contentfulBlog.beschreibung.beschreibung}</p>

        <Blogpost />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    contentfulBlog {
      ueberschrift
      beschreibung {
        beschreibung
      }
    }
  }
`;

export default Blog;

export const Head = () => <title>Blog</title>;
