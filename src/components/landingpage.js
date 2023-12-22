import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Landingpage() {
  const data = useStaticQuery(graphql`
    query LandingpageQuery {
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
    <div className="h-screen text-white">
      <GatsbyImage
        className="h-screen"
        image={data.contentfulLandingpage.heroimage.gatsbyImageData}
        alt={data.contentfulLandingpage.heroimage.title}
      />
      <div className="absolute flex flex-col justify-between top-0 right-0 left-0 p-8 h-1/2">
        <div className="flex w-full justify-between">
          <h1>N</h1>
          <h1>A</h1>
          <h1>T</h1>
          <h1>U</h1>
          <h1>R</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1>H</h1>
          <h1>E</h1>
          <h1>I</h1>
          <h1>L</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1>P</h1>
          <h1>R</h1>
          <h1>A</h1>
          <h1>X</h1>
          <h1>I</h1>
          <h1>S</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1>M</h1>
          <h1>I</h1>
          <h1>T</h1>
          <h1>T</h1>
          <h1>E</h1>
          <h1>R</h1>
        </div>
      </div>
      <h2 className="absolute h-1/2 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-justify">
        {data.contentfulLandingpage.beschreibung.beschreibung}

        <MdOutlineKeyboardArrowDown />
      </h2>
    </div>
  );
}
