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
    <div>
      <h1>{data.contentfulAbout.heading}</h1>
      <GatsbyImage
        className=""
        image={image}
        alt={data.contentfulAbout.portrait.title}
      />
      <p>{data.contentfulAbout.text.text}</p>
    </div>
  );
}
