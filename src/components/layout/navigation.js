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
    <div className="px-4 pt-4 flex justify-between absolute z-10 w-full">
      <Link to="/" activeClassName="">
        <GatsbyImage
          className="w-24"
          image={data.contentfulAsset.gatsbyImageData}
          alt={data.contentfulAsset.title}
        />
      </Link>

      <button
        className="bg-slate-400 h-10 px-8 rounded-md shadow-lg"
        type="submit"
      >
        <Link className="" to="/schwerpunkte">
          Menü
        </Link>
      </button>
    </div>
  );
}
