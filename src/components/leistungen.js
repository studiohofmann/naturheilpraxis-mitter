import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Leistungen() {
  const data = useStaticQuery(graphql`
    query LeistungenQuery {
      allContentfulLeistungen(sort: { order: ASC }) {
        edges {
          node {
            heading
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
    <div className="bg-emerald-200 py-48">
      {data.allContentfulContentType.edges.map(({ node }, i) => {
        return (
          <div className="mx-6 ">
            <h1 className="mb-6 font-bold">{node.name}</h1>
            <p className="text-justify mb-12">{node.description}</p>
          </div>
        );
      })}

      <div className="mx-6">
        {data.allContentfulLeistungen.edges.map(({ node }, i) => {
          return (
            <div
              className="mt-12 p-6 rounded-lg bg-gradient-to-r from-stone-300 to-teal-200 shadow-lg"
              key={i}
            >
              <h2 className="">{node.heading}</h2>
              <p className="text-justify">{node.leistungen.leistungen}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
