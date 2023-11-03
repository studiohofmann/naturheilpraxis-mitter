import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
    <div className="mt-8">
      <h1 className=" bg-red-400 text-center">
        {data.contentfulAbout.heading}
      </h1>
      <GatsbyImage
        className="mt-8 w-screen h-full"
        image={image}
        alt={data.contentfulAbout.portrait.title}
      />
      <p className="mt-8">{data.contentfulAbout.text.text}</p>
    </div>
  );
}
