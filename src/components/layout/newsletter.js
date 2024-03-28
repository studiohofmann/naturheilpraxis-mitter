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
    <div>
      <h2 className="pb-8">{data.contentfulNewsletter.titel}</h2>
      <p className="pb-8">{data.contentfulNewsletter.text.text}</p>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Email"
          className="w-full"
        />

        <button type="submit">abonnieren</button>
      </div>
    </div>
  );
}
