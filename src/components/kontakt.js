import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Contact() {
  return (
    <StaticQuery
      query={graphql`
        query KontaktQuery {
          contentfulKontakt {
            beschreibung {
              beschreibung
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <div className="flex justify-between">
            <h2>K</h2>
            <h2>O</h2>
            <h2>N</h2>
            <h2>T</h2>
            <h2>A</h2>
            <h2>K</h2>
            <h2>T</h2>
          </div>
          <p className="text-justify">
            {data.contentfulKontakt.beschreibung.beschreibung}
          </p>

          <form name="contact" method="POST" data-netlify="true" className="">
            <p>
              <label className="flex justify-between my-3 bg-lime-200">
                <div className="m-8">Name</div>
                <input
                  className="w-6/12 bg-amber-400"
                  type="text"
                  name="name"
                />
              </label>
            </p>
            <p>
              <label className="flex justify-between my-3 bg-lime-200">
                <div className="m-8">Email</div>
                <input
                  className="w-6/12 bg-amber-400"
                  type="email"
                  name="email"
                />
              </label>
            </p>
            <p>
              <label className="flex justify-between my-3 bg-lime-200">
                <div className="m-8">Betreff</div>
                <input
                  className="w-6/12 bg-amber-400"
                  type="email"
                  name="email"
                />
              </label>
            </p>

            <p>
              <label className="flex justify-between my-3 bg-lime-200">
                <div className="m-8">Nachricht</div>
                <textarea
                  className="w-6/12 bg-amber-400"
                  name="message"
                ></textarea>
              </label>
            </p>
            <p>
              <button className="bg-cyan-500 w-full my-3" type="submit">
                Senden
              </button>
            </p>
          </form>
        </div>
      )}
    />
  );
}
