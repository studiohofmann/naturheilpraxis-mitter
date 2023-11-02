import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Heroimage() {
  const data = useStaticQuery(graphql`
    query HeroimageQuery {
      contentfulIndex {
        heroimage {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 100
            layout: FULL_WIDTH
          )
          title
        }
      }
    }
  `);

  const image = getImage(data.contentfulIndex.heroimage.gatsbyImageData);

  return (
    <div className="w-2/5">
      <GatsbyImage image={image} alt={data.contentfulIndex.heroimage.title} />
    </div>
  );
}
