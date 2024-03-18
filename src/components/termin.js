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
    <div className="bg-yellow px-3 py-32">
      <h1 className="pb-10 w-2/3 underline underline-offset-8">
        {data.contentfulTermin.ueberschrift}
      </h1>
      <p className="pb-20">{data.contentfulTermin.beschreibung.beschreibung}</p>

      <div className="flex flex-col w-2/3 float-right gap-3">
        <a href="tel:+499123456789">
          <h1
            className="
          flex"
          >
            <IoMdCall className="mr-3 pt-2" />
            Anruf
          </h1>
        </a>

        <Link to="/kontakt">
          <h1 className="flex">
            <IoMdMail className="mr-3 pt-2" />
            Email
          </h1>
        </Link>

        <a href="https://wa.me/1XXXXXXXXXX" target="_blank">
          <h1 className="flex">
            <IoLogoWhatsapp className="mr-3 pt-2" />
            Whatsapp
          </h1>
        </a>
      </div>
      <p class="clear-right"></p>
    </div>
  );
}
