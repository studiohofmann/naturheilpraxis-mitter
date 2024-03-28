import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Termin() {
  const data = useStaticQuery(graphql`
    query TerminQuery {
      contentfulTermin {
        ueberschrift
        beschreibung {
          beschreibung
        }
        button {
          button
        }
        button1
        button2
        button3
      }
    }
  `);

  return (
    <div className="bg-gray px-8 pt-16 pb-32">
      <h1 className="pb-16 w-2/3">{data.contentfulTermin.ueberschrift}</h1>
      <p className="pb-16">{data.contentfulTermin.beschreibung.beschreibung}</p>

      <div className="flex flex-col w-2/3 float-right gap-4">
        <a href="tel:+499123456789">
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

        <a href="https://wa.me/1XXXXXXXXXX" target="_blank">
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
