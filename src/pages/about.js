import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAbout {
        heading
        portrait {
          gatsbyImageData
          title
        }
        text {
          text
        }
      }
    }
  `);

  const image = getImage(data.contentfulAbout.portrait.gatsbyImageData);

  return (
    <Layout>
      <div>
        <h1 className="bg-orange-600 text-center">
          {data.contentfulAbout.heading}
        </h1>
        <div className="g-red-400 flex flex-col laptop:flex-row">
          <GatsbyImage
            className="m-8 bg-green-400 flex-1"
            image={image}
            alt={data.contentfulAbout.portrait.title}
          />

          <p className="m-8 bg-red-400 flex-1">
            {data.contentfulAbout.text.text}
          </p>
        </div>
      </div>
    </Layout>
  );
}
