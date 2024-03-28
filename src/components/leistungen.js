import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

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
    <div className="bg-yellow px-8 pt-16 pb-32 -mb-2">
      <h1 className="pb-8">{data.contentfulLeistungen.ueberschrift} </h1>
      <p className="pb-16">
        {data.contentfulLeistungen.beschreibung.beschreibung}
      </p>
      <div className="clear-both"></div>

      {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
        return (
          <div key={i}>
            <h2
              onClick={() => {
                toggleOpen(node.ueberschrift);
              }}
            >
              <a className="flex justify-between mb-4">
                {node.ueberschrift}
                {isOpen[node.ueberschrift] ? (
                  <IoIosClose className="text-3xl shrink-0" />
                ) : (
                  <IoIosAdd className="text-3xl shrink-0" />
                )}
              </a>
            </h2>

            {isOpen[node.ueberschrift] && (
              <p className="bg-gray shadow-lg mb-8 pt-4 pb-8 px-4">
                {node.text.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
