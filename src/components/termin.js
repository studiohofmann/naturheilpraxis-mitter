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
    <div className="bg-amber-50 pt-20  pb-20 ">
      <div className="bg-gradient-to-r from-teal-200 to-emerald-200 mx-5 p-5 shadow-lg rounded-md">
        <p className="">{data.contentfulTermin.beschreibung.beschreibung}</p>

        <button
          className="w-4/12 h-12 bg-stone-300 rounded-full mt-5"
          type="submit"
        >
          {data.contentfulTermin.button.button}
        </button>
      </div>
    </div>
  );
}
