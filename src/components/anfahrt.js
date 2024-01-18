import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Anfahrt() {
  return (
    <StaticQuery
      query={graphql`
        query AnfahrtQuery {
          contentfulKontakt {
            ueberschrift
            beschreibung {
              beschreibung
            }
            anfahrtueberschrift
            anfahrtbeschreibung {
              anfahrtbeschreibung
            }
          }
        }
      `}
      render={(data) => <div></div>}
    />
  );
}
