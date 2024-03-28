import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Map from "./map";

export default function Anfahrt() {
  const data = useStaticQuery(graphql`
    query AnfahrtQuery {
      contentfulAnfahrt {
        ueberschrift
        beschreibung {
          beschreibung
        }
      }
    }
  `);

  return (
    <div className="bg-yellow pb-32">
      <div className="px-8">
        <h1 className="py-16">{data.contentfulAnfahrt.ueberschrift}</h1>
        <p className="pb-16">
          {data.contentfulAnfahrt.beschreibung.beschreibung}
        </p>
      </div>
      <Map />
    </div>
  );
}
