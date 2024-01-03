import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulAsset(filename: { eq: "logo.png" }) {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
        title
      }
    }
  `);

  return (
    <div className="flex absolute z-10 mx-6 mt-6 width-full left-0 right-0">
      <Link to="/" activeClassName="">
        <GatsbyImage
          className="w-20"
          image={data.contentfulAsset.gatsbyImageData}
          alt={data.contentfulAsset.title}
        />
      </Link>
      <div className="w-full">
        <div className="absolute bottom-0 right-0 pb-2">
          <Link
            className="mx-6 rounded-full px-3 py-2 -mb-2 border"
            to="/specialization"
          >
            Schwerpunkte
          </Link>
          <Link className="mr-6 rounded-full border px-3 py-2" to="/blog">
            Blog
          </Link>
          <Link className=" rounded-full border px-3 py-2" to="/contact">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
