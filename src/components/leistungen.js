import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Leistungen() {
  const data = useStaticQuery(graphql`
    query LeistungenQuery {
      allContentfulLeistungen(sort: { order: ASC }) {
        edges {
          node {
            leistungen {
              leistungen
            }
            order
          }
        }
      }
      allContentfulContentType(filter: { name: { eq: "Leistungen" } }) {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `);

  return (
    <div className="bg-lime-400 py-48">
      {data.allContentfulContentType.edges.map(({ node }, i) => {
        return (
          <div className="mx-6">
            <h1 className="mb-6">{node.name}</h1>
            <p className="text-justify mb-12">{node.description}</p>
          </div>
        );
      })}
      <div className="grid grid-cols-2 gap-6 mx-6">
        {data.allContentfulLeistungen.edges.map(({ node }, i) => {
          return (
            <div
              className="flex items-center justify-center aspect-square bg-green-500 rounded-md"
              key={i}
            >
              <h2 className="text-center m-6">{node.leistungen.leistungen}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
