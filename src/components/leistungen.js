import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Leistungen() {
  const [isVisible, setIsVisible] = useState(false);
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
    <div className="bg-zinc-300 py-36 p-6">
      <h1 className="mb-3">{data.contentfulLeistungen.ueberschrift}</h1>
      <p className="mb-12">
        {data.contentfulLeistungen.beschreibung.beschreibung}
      </p>
      <div className="flex flex-col gap-6">
        {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
          return (
            <div key={i}>
              <h2 className="mb-4">{node.ueberschrift}</h2>
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide content" : "Show content"}
              </button>{" "}
              {isVisible && (
                <div>
                  <p className="text-justify">{node.text.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
