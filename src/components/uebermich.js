import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Uebermich() {
  return (
    <StaticQuery
      query={graphql`
        query UebermichQuery {
          contentfulUebermich {
            foto {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
            ueberschrift
            text {
              text
            }
          }
        }
      `}
      render={(data) => (
        <div className="mx-6">
          <h1>{data.contentfulUebermich.ueberschrift}</h1>
          <GatsbyImage
            className="bg-green-400 flex-1"
            image={data.contentfulUebermich.foto.gatsbyImageData}
            alt={data.contentfulUebermich.foto.gatsbyImageData}
          />
          <p>{data.contentfulUebermich.text.text}</p>
        </div>
      )}
    />
  );
}
