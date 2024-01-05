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
    <div className="bg-lime-400 py-48">
      {data.allContentfulContentType.edges.map(({ node }, i) => {
        return (
          <div className="mx-6">
            <h1 className="mb-6">{node.name}</h1>
            <p className="text-justify mb-12">{node.description}</p>
          </div>
        );
      })}

      <div className="mx-6">
        {data.allContentfulLeistungen.edges.map(({ node }, i) => {
          return (
            <div className="my-6 bg-red-200 p-6" key={i}>
              <h2 className="">{node.heading}</h2>
              <p className="text-justify">{node.leistungen.leistungen}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
