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
      <h1 className="pb-16 underline underline-offset-8">
        {data.contentfulNewsletter.titel}
      </h1>
      <p className="pb-16 w-2/3">{data.contentfulNewsletter.text.text}</p>
      <div className="flex gap-2">
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
          <h1 type="submit" className="p-1 bg-linkbackground text-linktext">
            abonnieren
          </h1>
        </div>
      </div>
    </div>
  );
}
