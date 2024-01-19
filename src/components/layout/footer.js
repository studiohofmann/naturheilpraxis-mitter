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
    <div className="bg-amber-200 pt-20 pb-4">
      <div className="flex">
        <p className="shadow-lg rounded-md bg-neutral-500 w-1/2 p-4 ml-4 mr-2">
          {data.contentfulKontakt.adresse.adresse}
        </p>

        <div className="flex flex-wrap flex-row-reverse bg-orange-200 w-1/2 p-4 ml-2 mr-4 gap-4 shadow-lg rounded-md">
          <button className="bg-slate-300 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/schwerpunkte">
              Schwerpunkte
            </Link>
          </button>

          <button className="bg-slate-300 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/blog">
              Blog
            </Link>
          </button>

          <button className="bg-slate-300 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Impressum
            </Link>
          </button>

          <button className="bg-slate-300 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Kontakt
            </Link>
          </button>

          <button className="bg-slate-300 rounded-full py-2 px-4" type="submit">
            <Link className="rounded-full" to="/kontakt">
              Über mich
            </Link>
          </button>
        </div>
      </div>
      <div className="bg-orange-500 mx-4 mt-4 p-4 shadow-lg rounded-md">
        <p className="">
          {today.getFullYear()}
          {data.contentfulFooter.copyright.copyright}
        </p>
      </div>
    </div>
  );
}
