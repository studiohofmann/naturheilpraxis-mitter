import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Leistungen() {
  const data = useStaticQuery(graphql`
    query LeistungenQuery {
      allContentfulLeistungenpost(sort: { reihenfolge: DESC }) {
        edges {
          node {
            ueberschrift
            text {
              text
            }
          }
        }
      }
      contentfulLeistungen {
        ueberschrift
        beschreibung {
          beschreibung
        }
      }
    }
  `);

  return (
    <div className="bg-emerald-200 py-40 p-5">
      <h1 className="mb-4">{data.contentfulLeistungen.ueberschrift}</h1>
      <p className="mb-20">
        {data.contentfulLeistungen.beschreibung.beschreibung}
      </p>
      <div>
        {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
          return (
            <div
              className="p-4 mb-8 rounded-lg bg-gradient-to-r from-stone-300 to-teal-200 shadow-lg"
              key={i}
            >
              <h2 className="mb-4">{node.ueberschrift}</h2>
              <p className="text-justify">{node.text.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
