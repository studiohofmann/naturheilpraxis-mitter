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
    <div className="bg-gray-100 px-5">
      <Newsletter />
      <div className="flex gap-5">
        <div className="flex flex-col w-2/3">
          <Link to="/schwerpunkte" className="bg-green-300 mb-2">
            <h1>Schwerpunkte</h1>
          </Link>
          <Link to="/uebermich" className="bg-green-300 mb-2">
            <h1>Über mich</h1>
          </Link>
          <Link to="/blog" className="bg-green-300 mb-2">
            <h1>Blog</h1>
          </Link>
          <Link to="/kontakt" className="bg-green-300">
            <h1>Kontakt</h1>
          </Link>
        </div>
        <a
          href="https://maps.app.goo.gl/kcJtWPnBZ2NwwEhY8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-300 grow"
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

      <p className="pt-10 pb-2 text-gray-400">
        {today.getFullYear()} © Naturheilpraxis Mitter
        <div className="flex">
          {renderRichText(data.contentfulImpressum.copyright)}&nbsp;
          <a
            href="https://www.instagram.com/superstudiohofmann"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-300 text-blue-500 inline"
          >
            Studio Hofmann
          </a>
        </div>
      </p>
    </div>
  );
}
