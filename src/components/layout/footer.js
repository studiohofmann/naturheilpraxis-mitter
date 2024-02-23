import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

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
    <div className="bg-slate-300 pt-20 pb-4">
      <div className="flex gap-6 mx-6 mb-6">
        <div className="shadow-lg rounded-md bg-stone-200 w-1/2 p-6">
          <p>{renderRichText(data.contentfulImpressum.adresse)}</p>
        </div>

        <div className="flex flex-wrap flex-row-reverse bg-stone-200 w-1/2 p-6  gap-4 shadow-lg rounded-md">
          <button className="bg-slate-400 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/schwerpunkte">
              Schwerpunkte
            </Link>
          </button>
          <button className="bg-slate-400 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Über mich
            </Link>
          </button>
          <button className="bg-slate-400 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Kontakt
            </Link>
          </button>

          <button className="bg-slate-400 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/blog">
              Blog
            </Link>
          </button>

          <button className="bg-slate-400 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Impressum
            </Link>
          </button>
        </div>
      </div>

      <p className="mx-6 text-center">
        {today.getFullYear()} © Naturheilpraxis Mitter
        {renderRichText(data.contentfulImpressum.copyright)}
      </p>
    </div>
  );
}
