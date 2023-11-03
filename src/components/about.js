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
    <div className="mt-8 w-full bg-red-400">
      <h1 className="bg-orange-600 text-center">
        {data.contentfulAbout.heading}
      </h1>
      <div className=" bg-green-400">
        <GatsbyImage
          className="mt-8"
          image={image}
          alt={data.contentfulAbout.portrait.title}
        />
      </div>
      <p className="mt-8">{data.contentfulAbout.text.text}</p>
    </div>
  );
}
