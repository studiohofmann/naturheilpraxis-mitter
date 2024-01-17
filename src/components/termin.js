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
    <div className="bg-slate-200  -mt-6 z-10">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500  mx-6 p-6 shadow-lg rounded-md">
        <p className="">{data.contentfulTermin.beschreibung.beschreibung}</p>

        <button
          className="w-4/12 h-12 bg-teal-200 rounded-full mt-6"
          type="submit"
        >
          {data.contentfulTermin.button.button}
        </button>
      </div>
    </div>
  );
}
