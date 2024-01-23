import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Termin() {
  const data = useStaticQuery(graphql`
    query TerminQuery {
      contentfulTermin {
        ueberschrift
        beschreibung {
          beschreibung
        }
        button {
          button
        }
      }
    }
  `);

  return (
    <div className="px-4 bg-green-200 pt-20  pb-20 ">
      <h1 className="mb-8">{data.contentfulTermin.ueberschrift}</h1>
      <div className="bg-gradient-to-tr from-amber-50 to-amber-100 p-4 shadow-lg rounded-md">
        <p className="">{data.contentfulTermin.beschreibung.beschreibung}</p>

        <button
          className="w-4/12 h-12 bg-red-200 rounded-full mt-5"
          type="submit"
        >
          {data.contentfulTermin.button.button}
        </button>
      </div>
    </div>
  );
}
