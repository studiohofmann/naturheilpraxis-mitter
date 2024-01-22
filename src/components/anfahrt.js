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
    <div className="bg-amber-50 pt-20  pb-20 ">
      <div className="mx-4 mb-10">
        <h1 className="mb-4">{data.contentfulAnfahrt.ueberschrift}</h1>
        <p>{data.contentfulAnfahrt.beschreibung.beschreibung}</p>
      </div>
      <Map />
    </div>
  );
}
