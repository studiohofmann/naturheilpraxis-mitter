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
      <div className="bg-gradient-to-r from-teal-200 to-emerald-200 mx-5 p-5 shadow-lg rounded-md">
        <h1 className="">{data.contentfulAnfahrt.ueberschrift}</h1>
        <p>{data.contentfulAnfahrt.beschreibung.beschreibung}</p>
      </div>
      <Map />
    </div>
  );
}
