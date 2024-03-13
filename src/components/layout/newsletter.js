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
    <div className="pb-10">
      <h1 className="pt-10 pb-5 underline underline-offset-8 text-gray-400">
        {data.contentfulNewsletter.titel}
      </h1>
      <p className="pb-5 text-gray-400 w-2/3">
        {data.contentfulNewsletter.text.text}
      </p>
      <div className="flex gap-5">
        <div className="w-2/3">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Email"
            className="text-gray-100 bg-gray-400 w-full h-full"
          />
        </div>
        <div className="grow">
          <h1 type="submit" className="bg-gray-400 text-green-300">
            abonnieren
          </h1>
        </div>
      </div>
    </div>
  );
}
