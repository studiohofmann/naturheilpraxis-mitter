import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Termin() {
  const data = useStaticQuery(graphql`
    query TerminQuery {
      contentfulTermin {
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
    <div className="bg-sky-200 pt-20  pb-20 ">
      <div className="bg-amber-50 mx-5 p-5 shadow-lg rounded-md">
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
