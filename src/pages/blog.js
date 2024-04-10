import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Blogpost from "../components/blogpost";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Blog = ({ data }) => {
  const options = {
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        let anchorAttrs = {};

        if (!node.data.uri.includes("my-domain-name.com")) {
          anchorAttrs = {
            target: "_blank",
            rel: "noopener noreferrer",
          };
        }
        return (
          <a href={node.data.uri} {...anchorAttrs}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <Layout>
      <div className="px-8 pt-[256px] lg:pt-0 pb-32 bg-gray lg:w-3/4 lg:float-right">
        <h1 className="py-16">{data.contentfulBlog.ueberschrift}</h1>
        <p className="mb-16">
          {renderRichText(data.contentfulBlog.beschreibung, options)}
        </p>
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
        raw
      }
    }
  }
`;

export default Blog;

export const Head = () => <title>Blog</title>;
