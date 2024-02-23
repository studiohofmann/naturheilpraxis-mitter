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
    <div className="flex justify-center items-center h-[50vh]">
      <GatsbyImage
        className="h-full"
        image={data.contentfulStartbild.bild.gatsbyImageData}
        alt={data.contentfulStartbild.bild.title}
      />

      <div className="absolute left-0 right-0 px-6">
        <h1 className="text-6xl text-zinc-500">
          {data.contentfulStartbild.text.text}
        </h1>
      </div>
    </div>
  );
}
