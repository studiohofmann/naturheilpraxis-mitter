import * as React from "react";
import { useState } from "react";
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

  const [isOpen, setIsOpen] = useState({});
  const toggleOpen = (ueberschrift) => {
    setIsOpen({
      ...isOpen,
      [ueberschrift]: !isOpen[ueberschrift],
    });
  };

  return (
    <div className="bg-gray-400 py-32">
      <h1 className="text-gray-100 px-5 pb-5 underline underline-offset-8">
        {data.contentfulLeistungen.ueberschrift}
      </h1>
      <p className="px-5 pb-10 text-gray-100">
        {data.contentfulLeistungen.beschreibung.beschreibung}
      </p>
      <div className="px-5">
        {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
          return (
            <div key={i}>
              <h1
                onClick={() => {
                  toggleOpen(node.ueberschrift);
                }}
              >
                <div className="flex">
                  <div className="text-blue-500 bg-green-300 hover:bg-blue-700 hover:text-gray-100 duration-500 w-full mb-3">
                    {node.ueberschrift}
                  </div>
                  <div>{isOpen[node.ueberschrift] ? "" : ""}</div>
                </div>
              </h1>

              {isOpen[node.ueberschrift] && (
                <p className="text-gray-100 pb-5">{node.text.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
