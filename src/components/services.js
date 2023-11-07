import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Services() {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulLeistungen(sort: { order: ASC }) {
        edges {
          node {
            heading
            order
          }
        }
      }
      allContentfulContentType(filter: { name: { eq: "Leistungen" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allContentfulContentType.edges.map(({ node }, i) => {
        return (
          <div key={i}>
            <h1 className="text-center">{node.name}</h1>
          </div>
        );
      })}
      <div className="grid grid-cols-2 gap-2">
        {data.allContentfulLeistungen.edges.map(({ node }, i) => {
          return (
            <div
              className="flex items-center justify-center aspect-square bg-red-200"
              key={i}
            >
              <h2 className="">{node.heading}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
