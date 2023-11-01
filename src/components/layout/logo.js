import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Logo() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulAsset(filename: { eq: "logo.png" }) {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
        title
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.contentfulAsset.gatsbyImageData}
      alt={data.contentfulAsset.title}
    />
  );
}
