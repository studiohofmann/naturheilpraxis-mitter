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
          <div className="">
            <div className="flex bg-red-200 justify-between">
              <h2>L</h2>
              <h2>E</h2>
              <h2>I</h2>
              <h2>S</h2>
              <h2>T</h2>
              <h2>U</h2>
              <h2>N</h2>
              <h2>G</h2>
              <h2>E</h2>
              <h2>N</h2>
            </div>
            <div key={i}>
              <p className="text-justify">{node.description}</p>
            </div>
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
