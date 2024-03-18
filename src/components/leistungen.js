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
    <div className="bg-green px-2 py-20 -mb-2">
      <h1 className="text-darkgreen pb-10 underline underline-offset-8 w-2/3 float-right">
        {data.contentfulLeistungen.ueberschrift}
      </h1>
      <p className="pb-10 text-darkgreen w-2/3 float-right">
        {data.contentfulLeistungen.beschreibung.beschreibung}
      </p>
      <div className="clear-both"></div>

      {data.allContentfulLeistungenpost.edges.map(({ node }, i) => {
        return (
          <div key={i}>
            <h1
              onClick={() => {
                toggleOpen(node.ueberschrift);
              }}
            >
              <div className="flex gap-2">
                <a className="w-full p-1 mb-2">{node.ueberschrift}</a>
              </div>
            </h1>

            {isOpen[node.ueberschrift] && (
              <p className="text-green mb-10 bg-lightgreen p-2">
                {node.text.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
