import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

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
    <div className="bg-gray-100">
      <div className="px-5 py-32">
        <h1 className="pb-5 underline underline-offset-8  w-2/3">
          {data.contentfulTermin.ueberschrift}
        </h1>
        <p className="pb-10  w-2/3">
          {data.contentfulTermin.beschreibung.beschreibung}
        </p>

        <div className="flex flex-col w-2/3 float-right">
          <Link to="/schwerpunkte" className="bg-green-300 mb-2">
            <h1>Anruf</h1>
          </Link>
          <Link to="/schwerpunkte" className="bg-green-300 mb-2">
            <h1>Email</h1>
          </Link>
          <Link to="/schwerpunkte" className="bg-green-300">
            <h1>Whatsapp</h1>
          </Link>
        </div>
        <p class="clear-right"></p>
      </div>
    </div>
  );
}
