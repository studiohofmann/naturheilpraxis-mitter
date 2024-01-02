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
            description
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allContentfulContentType.edges.map(({ node }, i) => {
        return (
          <div>
            <h1 className="text-justify">{node.name}</h1>
            <p className="text-justify">{node.description}</p>
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
