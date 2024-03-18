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
    <div className="bg-yellow">
      <div className="px-3 pt-32 pb-64">
        <h1 className="">{data.contentfulAnfahrt.ueberschrift}</h1>
        <p>{data.contentfulAnfahrt.beschreibung.beschreibung}</p>
      </div>
      <Map className="px-3" />
    </div>
  );
}
