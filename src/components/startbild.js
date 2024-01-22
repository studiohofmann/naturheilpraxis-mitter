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
    <div className="flex justify-center items-end h-[80vh]">
      <GatsbyImage
        className="h-full"
        image={data.contentfulStartbild.bild.gatsbyImageData}
        alt={data.contentfulStartbild.bild.title}
      />

      <div className="absolute left-0 right-0  mx-5 mb-20 p-5 ">
        <h1 className="text-amber-50">{data.contentfulStartbild.text.text}</h1>
      </div>
    </div>
  );
}
