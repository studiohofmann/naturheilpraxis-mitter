import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Blogpost from "../components/blogpost";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="bg-teal-200 py-80">
        <div className="mx-4">
          <h1 className="mb-4">{data.contentfulBlog.ueberschrift}</h1>
          <p className="mb-40 text-justify ">
            {data.contentfulBlog.beschreibung.beschreibung}
          </p>
        </div>

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
