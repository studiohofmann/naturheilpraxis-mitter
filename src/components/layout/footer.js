import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulKontakt {
        adresse {
          adresse
        }
      }
      contentfulFooter {
        copyright {
          copyright
        }
      }
    }
  `);

  const today = new Date();

  return (
    <div className="pt-48 pb-6 bg-amber-50">
      <div className="flex mx-6">
        <div className="p-6 shadow-lg rounded-md bg-gradient-to-r from-slate-700 to-slate-800">
          {data.contentfulKontakt.adresse.adresse}
        </div>

        <div className="flex-1 flex flex-col shadow-lg rounded-md p-6 ml-6 bg-gradient-to-r from-slate-700 to-slate-800">
          <Link to="/specialization">Schwerpunkte</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/contact">Impressum</Link>
        </div>
      </div>
      <p className="m-6">{today.getFullYear()}Hello</p>
    </div>
  );
}
