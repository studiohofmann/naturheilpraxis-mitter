import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReadMoreReact from "read-more-react";

export default function BlogpostIndex() {
  const data = useStaticQuery(graphql`
    query BlogpostIndexQuery {
      contentfulAktuelles {
        ueberschrift
        beschreibung {
          beschreibung
        }
      }

      allContentfulBlogpost(limit: 1, sort: { createdAt: DESC }) {
        edges {
          node {
            ueberschrift
            datum
            bild {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
            text {
              text
            }
          }
        }
      }
    }
  `);

  return (
    <div className="bg-gray px-3 pt-32 pb-64">
      <div className="">
        <h1 className="mb-16 underline underline-offset-8">
          {data.contentfulAktuelles.ueberschrift}
        </h1>
        <p className="mb-16">
          {data.contentfulAktuelles.beschreibung.beschreibung}
        </p>
      </div>

      {data.allContentfulBlogpost.edges.map(({ node }, i) => {
        const singleImage = getImage(node.bild);
        return (
          <div>
            <div key={i} className="bg-yellow p-6">
              <h1 className="mb-6">{node.ueberschrift}</h1>
              <p className="mb-6">{node.datum}</p>

              <GatsbyImage
                className="mb-6"
                image={singleImage}
                alt={node.title}
              />

              <ReadMoreReact
                text={node.text.text}
                min={80}
                ideal={100}
                max={200}
                readMoreText="mehr..."
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
