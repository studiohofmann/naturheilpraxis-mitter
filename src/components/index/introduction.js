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

  return (
    <h1 className="absolute z-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {data.contentfulIndex.introduction}
    </h1>
  );
}
