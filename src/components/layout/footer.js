import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        adresse {
          adresse
        }
        termin {
          termin
        }
      }
    }
  `);

  return (
    <div className="pt-48 pb-6">
      <div className="mx-6 mb-24">
        <div className="mb-6">{data.contentfulFooter.termin.termin}</div>
        <Link to="/contact">
          <button
            className="w-4/12 h-12 bg-teal-200 rounded-full"
            type="submit"
          >
            Termin Buchen
          </button>
        </Link>
      </div>
      <div className="flex mx-6">
        <div className="bg-red-200 flex-1">
          {data.contentfulFooter.adresse.adresse}
        </div>

        <div className="flex-1 flex flex-col">
          <Link to="/specialization">Schwerpunkte</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/contact">Impressum</Link>
        </div>
      </div>
    </div>
  );
}
