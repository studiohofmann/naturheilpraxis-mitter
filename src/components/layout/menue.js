import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Menue() {
  const data = useStaticQuery(graphql`
    query MenueQuery {
      contentfulAsset(filename: { eq: "logo.png" }) {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
        title
      }
    }
  `);

  return (
    <div className="flex absolute z-10 mx-6 mt-6 width-full left-0 right-0">
      <Link to="/" activeClassName="w-1/4">
        <GatsbyImage
          className=""
          image={data.contentfulAsset.gatsbyImageData}
          alt={data.contentfulAsset.title}
        />
      </Link>
      <div className="w-3/4 flex flex-wrap gap-5 flex-row-reverse">
        <button className="bg-slate-300 rounded-full py-2 px-5" type="submit">
          <Link className="rounded-full" to="/schwerpunkte">
            Schwerpunkte
          </Link>
        </button>

        <button className="bg-slate-300 rounded-full py-2 px-5" type="submit">
          <Link className="rounded-full" to="/blog">
            Blog
          </Link>
        </button>

        <button className="bg-slate-300 rounded-full py-2 px-5" type="submit">
          <Link className="rounded-full" to="/kontakt">
            Kontakt
          </Link>
        </button>

        <button className="bg-slate-300 rounded-full py-2 px-5" type="submit">
          <Link className="rounded-full" to="/kontakt">
            Über mich
          </Link>
        </button>
      </div>
    </div>
  );
}
