import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

export default function Termin() {
  const data = useStaticQuery(graphql`
    query TerminQuery {
      contentfulTermin {
        ueberschrift

        button {
          button
        }
        button1
        button2
        button3
        beschreibung {
          raw
        }
      }
    }
  `);

  const options = {
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        let anchorAttrs = {};

        if (!node.data.uri.includes("my-domain-name.com")) {
          anchorAttrs = {
            target: "_blank",
            rel: "noopener noreferrer",
          };
        }
        return (
          <a href={node.data.uri} {...anchorAttrs}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="bg-gray px-8 pt-16 pb-32 lg:w-3/4 lg:float-right">
      <h1 className="pb-16 w-2/3">{data.contentfulTermin.ueberschrift}</h1>
      <p className="pb-16">
        {renderRichText(data.contentfulTermin.beschreibung, options)}
      </p>

      <div className="flex flex-col w-2/3 float-right gap-4">
        <a href="tel:+499123456789" aria-label="Anruf">
          <h2
            className="
          flex"
          >
            <IoMdCall className="mr-10  pt-1 text-3xl" />

            <div className="pt-1">Anruf</div>
          </h2>
        </a>

        <Link to="/kontakt">
          <h2 className="flex">
            <IoMdMail className="mr-10  pt-1 text-3xl" />

            <div className="pt-1">E-Mail</div>
          </h2>
        </Link>

        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          aria-label="WhatsApp"
        >
          <h2 className="flex">
            <h1>
              <IoLogoWhatsapp className="mr-10  pt-1 text-3xl" />
            </h1>
            <div className="pt-1">WhatsApp</div>
          </h2>
        </a>
      </div>
      <p class="clear-right"></p>
    </div>
  );
}
