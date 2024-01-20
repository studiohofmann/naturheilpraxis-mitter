import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Menue() {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      contentfulAsset(filename: { eq: "logo.png" }) {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
        title
      }
    }
  `);

  return (
    <div className="px-4 pt-4 flex absolute z-10">
      <Link to="/" activeClassName="">
        <GatsbyImage
          className=""
          image={data.contentfulAsset.gatsbyImageData}
          alt={data.contentfulAsset.title}
        />
      </Link>
      <div className="-mt-2 -mr-2 ml-2 w-full">
        <button
          className="bg-slate-300 rounded-full py-1 px-4 m-2 float-right"
          type="submit"
        >
          <Link className="rounded-full" to="/schwerpunkte">
            Schwerpunkte
          </Link>
        </button>

        <button
          className="bg-slate-300 rounded-full py-1 px-4 m-2 float-right"
          type="submit"
        >
          <Link className="rounded-full" to="/blog">
            Blog
          </Link>
        </button>

        <button
          className="bg-slate-300 rounded-full py-1 px-4 m-2 float-right"
          type="submit"
        >
          <Link className="rounded-full" to="/kontakt">
            Kontakt
          </Link>
        </button>

        <button
          className="bg-slate-300 rounded-full py-1 px-4 m-2 float-right"
          type="submit"
        >
          <Link className="rounded-full" to="/uebermich">
            Über mich
          </Link>
        </button>
      </div>
    </div>
  );
}
