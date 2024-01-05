import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const Schwerpunkte = ({ data }) => {
  return (
    <Layout>
      <div className="bg-lime-200 pt-60">
        {data.allContentfulContentType.edges.map(({ node }, i) => {
          return (
            <div className="mx-6">
              <h1 className="mb-6">{node.name}</h1>
              <p className="text-justify mb-12">{node.description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SchwerpunkteQuery {
    allContentfulContentType(filter: { name: { eq: "Schwerpunkte" } }) {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

export default Schwerpunkte;

export const Head = () => <title>Schwerpunkte</title>;
