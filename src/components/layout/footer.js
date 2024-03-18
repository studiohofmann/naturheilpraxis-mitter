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
    <div className="bg-text px-3">
      <div className="py-16">
        <Newsletter />
      </div>
      <div className="flex gap-3 pb-32">
        <div className="flex flex-col gap-3 w-2/3">
          <Link to="/schwerpunkte" className="p-1">
            <h1>Schwerpunkte</h1>
          </Link>
          <Link to="/uebermich" className="p-1">
            <h1>Über mich</h1>
          </Link>
          <Link to="/blog" className="p-1">
            <h1>Blog</h1>
          </Link>
          <Link to="/kontakt" className="p-1">
            <h1>Kontakt</h1>
          </Link>
        </div>
        <a
          href="https://maps.app.goo.gl/kcJtWPnBZ2NwwEhY8"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 grow"
        >
          <h1 className="">
            Praxis Mitter
            <br />
            Hofwiesen
            <br />
            strasse 114
            <br />
            8057 Zürich
            <br />
          </h1>
        </a>
      </div>
      <p className="pb text-green">
        {today.getFullYear()} © Naturheilpraxis Mitter
        <div className="flex">
          {renderRichText(data.contentfulImpressum.copyright)}&nbsp;
          <a
            href="https://www.instagram.com/superstudiohofmann"
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-amber-300 bg-stone-400"
          >
            Studio Hofmann
          </a>
        </div>
      </p>
    </div>
  );
}
