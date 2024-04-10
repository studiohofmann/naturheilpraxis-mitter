import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function FooterMap() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        karte {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 100
            layout: FULL_WIDTH
          )
          title
        }
      }
      contentfulAdresse {
        adresse {
          raw
        }
      }
    }
  `);

  return (
    <div className="flex flex-col gap-4 h-full">
      <a
        href="https://maps.app.goo.gl/bkGC89aCxYDeMpni7"
        className="grow flex items-center justify-center p-0"
      >
        <GatsbyImage
          className="h-full flex-1 shadow-xl "
          image={data.contentfulFooter.karte.gatsbyImageData}
          alt={data.contentfulFooter.karte.title}
        />
        <div className="absolute break-words hyphens-auto w-32">
          {documentToReactComponents(
            JSON.parse(data.contentfulAdresse.adresse.raw)
          )}
        </div>
      </a>
      <div className="flex gap-4">
        <a href="tel:+499123456789" className="h-[44px] pt-[7px]">
          <h2>
            <IoMdCall className="text-3xl" />
          </h2>
        </a>

        <Link to="/kontakt" className="h-[44px] pt-[7px]">
          <h2>
            <IoMdMail className="text-3xl" />
          </h2>
        </Link>

        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          className="h-[44px] pt-[7px]"
        >
          <h2>
            <IoLogoWhatsapp className="text-3xl" />
          </h2>
        </a>
      </div>
    </div>
  );
}
