import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Newsletter from "./newsletter";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulImpressum {
        adresse {
          raw
        }
        copyright {
          raw
        }
      }
    }
  `);

  const today = new Date();

  return (
    <div className="bg-textcolor text-creme px-8 pt-16 pb-4">
      <div className="pb-16">
        <Newsletter />
      </div>
      <div className="flex gap-4 pb-16">
        <div className="flex flex-col gap-4 w-1/2">
          <Link to="/schwerpunkte" activeClassName="active">
            <h2>Schwerpunkte</h2>
          </Link>
          <Link to="/uebermich" activeClassName="active">
            <h2>Über mich</h2>
          </Link>
          <Link to="/blog" activeClassName="active">
            <h2>Blog</h2>
          </Link>
          <Link to="/kontakt" activeClassName="active">
            <h2>Kontakt</h2>
          </Link>
          <Link to="/kontakt" activeClassName="active">
            <h2>Impressum</h2>
          </Link>
        </div>
        <a
          href="https://maps.app.goo.gl/kcJtWPnBZ2NwwEhY8"
          target="_blank"
          rel="noopener noreferrer"
          className=" grow"
        >
          <h2 className="">
            Praxis Mitter
            <br />
            Hofwiesen
            <br />
            strasse 114
            <br />
            8057 Zürich
            <br />
          </h2>
        </a>
      </div>
      <p className="text-center">
        {today.getFullYear()} © Naturheilpraxis Mitter
      </p>
    </div>
  );
}
