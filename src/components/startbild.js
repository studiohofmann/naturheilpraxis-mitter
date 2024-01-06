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
        beschreibung {
          beschreibung
        }
      }
    }
  `);

  return (
    <div className="text-white flex justify-center items-center h-[75vh]">
      <GatsbyImage
        className="h-full"
        image={data.contentfulStartbild.bild.gatsbyImageData}
        alt={data.contentfulStartbild.bild.title}
      />

      <div className="absolute mx-6 ">
        <h1 className="">
          {data.contentfulStartbild.beschreibung.beschreibung}
        </h1>
      </div>
    </div>
  );
}
