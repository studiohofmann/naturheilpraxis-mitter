import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export default function Menue() {
  const data = useStaticQuery(graphql`
    query MenueQuery {
      contentfulLayout {
        menue1
        menue2
        menue3
        menue4
        menue5
      }
    }
  `);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Link to="/schwerpunkte" activeClassName="active">
        <h2>{data.contentfulLayout.menue1}</h2>
      </Link>
      <Link to="/uebermich" activeClassName="active">
        <h2>{data.contentfulLayout.menue2}</h2>
      </Link>
      <Link to="/blog" activeClassName="active">
        <h2>{data.contentfulLayout.menue3}</h2>
      </Link>
      <Link to="/kontakt" activeClassName="active">
        <h2>{data.contentfulLayout.menue4}</h2>
      </Link>
      <Link to="/impressum" activeClassName="active" id="impressum">
        <h2>{data.contentfulLayout.menue5}</h2>
      </Link>
    </div>
  );
}
