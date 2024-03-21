import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Startbild() {
  const data = useStaticQuery(graphql`
    query StartbildQuery {
      contentfulStartbild {
        bild {
          gatsbyImageData(placeholder: BLURRED, quality: 100)
          title
        }
        text {
          text
        }
      }
    }
  `);

  return (
    <div className="flex h-[66vh] text-center">
      <GatsbyImage
        className="h-full"
        image={data.contentfulStartbild.bild.gatsbyImageData}
        alt={data.contentfulStartbild.bild.title}
      />

      <div className="absolute mt-[256px] pt-32">
        <h1 className="text-creme text-5xl px-8">
          {data.contentfulStartbild.text.text}
        </h1>
      </div>
    </div>
  );
}
