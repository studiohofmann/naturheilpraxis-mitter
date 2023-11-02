import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Introduction() {
  const data = useStaticQuery(graphql`
    query IntroductionQuery {
      contentfulIndex {
        introduction
      }
    }
  `);

  return <h1>{data.contentfulIndex.introduction}</h1>;
}
