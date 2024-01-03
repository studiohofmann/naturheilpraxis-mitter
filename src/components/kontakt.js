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
        <div className="bg-green-200 py-48">
          {data.allContentfulContentType.edges.map(({ node }, i) => {
            return (
              <div className="mx-6">
                <h1 className="mb-6">{node.name}</h1>
                <p className="text-justify mb-12">{node.description}</p>
              </div>
            );
          })}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="mx-6 grid"
          >
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Vorname"
              className="w-full bg-teal-100 h-12 p-3 rounded-md mb-6"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Nachname"
              className="w-full bg-teal-100 h-12 p-3 rounded-md mb-6"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Email"
              className="w-full bg-teal-100 h-12 p-3 rounded-md mb-6"
            />

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Betreff"
              className="w-full bg-teal-100 h-12 p-3 rounded-md mb-6"
            />
            <div>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Nachricht"
                className="w-full bg-teal-100 h-12 p-3 rounded-md mb-6"
              />
            </div>

            <button
              className="w-4/12 h-12 bg-teal-200 rounded-full"
              type="submit"
            >
              Senden
            </button>
          </form>
        </div>
      )}
    />
  );
}
