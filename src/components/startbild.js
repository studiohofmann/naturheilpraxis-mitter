import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Startbild() {
  const data = useStaticQuery(graphql`
    query StartbildQuery {
      contentfulLandingpage {
        heroimage {
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
    <div className="h-3/4 text-white flex flex-col justify-center items-center ">
      <GatsbyImage
        className=""
        image={data.contentfulLandingpage.heroimage.gatsbyImageData}
        alt={data.contentfulLandingpage.heroimage.title}
      />
      <div className="absolute mx-6">
        <h1 className="">
          {data.contentfulLandingpage.beschreibung.beschreibung}
        </h1>
      </div>
    </div>
  );
}
