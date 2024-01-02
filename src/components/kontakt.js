import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Contact() {
  return (
    <StaticQuery
      query={graphql`
        query KontaktQuery {
          allContentfulContentType(filter: { name: { eq: "Kontakt" } }) {
            edges {
              node {
                name
                description
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="bg-green-200">
          {data.allContentfulContentType.edges.map(({ node }, i) => {
            return (
              <div>
                <h1 className="text-center">{node.name}</h1>
                <p className="text-justify">{node.description}</p>
              </div>
            );
          })}

          <form name="contact" method="POST" data-netlify="true" className="">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Vorname..."
              className="rounded-md w-6/12"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nachname..."
              className="rounded-md w-6/12 "
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Email.."
              className="rounded-md w-6/12"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Betreff..."
              className="rounded-md w-6/12"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nachricht..."
              className="rounded-md w-full"
            />

            <button className="bg-cyan-500 rounded-md" type="submit">
              Senden
            </button>
          </form>
        </div>
      )}
    />
  );
}
