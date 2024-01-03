import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
    <div className="bg-red-200 h-64">
      {data.contentfulFooter.adresse.adresse}
      {data.contentfulFooter.termin.termin}
    </div>
  );
}
