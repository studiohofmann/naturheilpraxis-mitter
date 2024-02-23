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
        button1
        button2
        button3
      }
    }
  `);

  return (
    <div className="px-6 bg-zinc-500 h-[50vh] flex items-center">
      <div>
        <h1 className="mb-3 tracking-wide text-zinc-300">
          {data.contentfulTermin.ueberschrift}
        </h1>

        <p className="mb-12 text-zinc-300">
          {data.contentfulTermin.beschreibung.beschreibung}
        </p>
        <div className="flex gap-6">
          <button
            className="basis-full bg-green-200 text-zinc-500"
            type="submit"
          >
            {data.contentfulTermin.button1}
          </button>

          <button
            className="basis-full bg-green-200 text-zinc-500"
            type="submit"
          >
            {data.contentfulTermin.button2}
          </button>

          <button
            className="basis-full bg-green-200 text-zinc-500"
            type="submit"
          >
            {data.contentfulTermin.button3}
          </button>
        </div>
      </div>
    </div>
  );
}
