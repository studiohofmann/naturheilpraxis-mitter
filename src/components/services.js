import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAbout {
        heading
        portrait {
          gatsbyImageData
          title
        }
        text {
          text
        }
      }
    }
  `);

  return <div>Services</div>;
}
