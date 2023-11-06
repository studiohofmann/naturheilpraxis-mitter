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
      <div className="g-red-400">
        <h1 className="bg-orange-600 text-center">
          {data.contentfulAbout.heading}
        </h1>

        <GatsbyImage
          className="m-8 bg-green-400"
          image={image}
          alt={data.contentfulAbout.portrait.title}
        />

        <p className="">{data.contentfulAbout.text.text}</p>
      </div>
    </Layout>
  );
}
