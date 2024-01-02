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
    <div className="flex absolute z-10 w-full ">
      <Link to="/" activeClassName="active">
        <GatsbyImage
          className="w-20"
          image={data.contentfulAsset.gatsbyImageData}
          alt={data.contentfulAsset.title}
        />
      </Link>
      <div className="flex justify-between w-full h-1/2">
        <Link
          className="rounded-full flex-1 text-center border"
          to="/specialization"
        >
          Schwerpunkte
        </Link>
        <Link className="rounded-full flex-1 text-center border" to="/blog">
          Blog
        </Link>
        <Link className="rounded-full flex-1 text-center border" to="/contact">
          Kontakt
        </Link>
      </div>
    </div>
  );
}
