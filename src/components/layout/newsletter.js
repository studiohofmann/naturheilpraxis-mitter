import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export default function Newsletter() {
  const data = useStaticQuery(graphql`
    query NewsletterQuery {
      contentfulNewsletter {
        titel
        text {
          text
        }
      }
    }
  `);

  return (
    <div className="text-linkbackground">
      <h2 className="pb-8">{data.contentfulNewsletter.titel}</h2>
      <p className="pb-8 w-2/3">{data.contentfulNewsletter.text.text}</p>
      <div className="flex gap-4">
        <div className="w-2/3">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Email"
            className="bg-linkbackground text-text w-full h-full p-1"
          />
        </div>
        <div className="grow">
          <h2 type="submit" className="p-1 bg-linkbackground text-linktext">
            abonnieren
          </h2>
        </div>
      </div>
    </div>
  );
}
