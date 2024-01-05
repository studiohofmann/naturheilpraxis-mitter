import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const Kontakt = ({ data }) => {
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
    allContentfulContentType(filter: { name: { eq: "Kontakt" } }) {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

export default Kontakt;

export const Head = () => <title>Kontakt</title>;
