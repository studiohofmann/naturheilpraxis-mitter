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
      {data.allContentfulLeistungen.edges.map(({ node }, i) => {
        return (
          <div className="">
            <h1 className="text-center">
              {data.allContentfulLeistungen.edges.heading}
            </h1>

            <div key={i}>
              <h2 className="mb-3">{node.heading}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
