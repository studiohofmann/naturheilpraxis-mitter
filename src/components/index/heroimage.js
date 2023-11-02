import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Heroimage() {
  const data = useStaticQuery(graphql`
    query HeroimageQuery {
      contentfulIndex {
        heroimage {
          gatsbyImageData(placeholder: BLURRED, quality: 100)
          title
        }
      }
    }
  `);

  const image = getImage(data.contentfulIndex.heroimage.gatsbyImageData);

  return (
    <GatsbyImage
      className="h-screen bg-cover bg-center bg-no-repeat"
      image={image}
      alt={data.contentfulIndex.heroimage.title}
    />
  );
}
