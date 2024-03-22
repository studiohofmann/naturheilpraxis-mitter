import * as React from "react";
import { Link } from "gatsby";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import Newsletter from "./newsletter";

export default function Footer() {
  const today = new Date();

  return (
    <div className="bg-footer text-creme px-8 pt-16 pb-4">
      <div className="pb-16">
        <Newsletter />
      </div>
      <div className="flex gap-4 pb-16">
        <div className="flex flex-col gap-4 w-1/2">
          <Link to="/schwerpunkte" activeClassName="active">
            <h2>Schwerpunkte</h2>
          </Link>
          <Link to="/uebermich" activeClassName="active">
            <h2>Über mich</h2>
          </Link>
          <Link to="/blog" activeClassName="active">
            <h2>Blog</h2>
          </Link>
          <Link to="/kontakt" activeClassName="active">
            <h2>Kontakt</h2>
          </Link>
          <Link to="/impressum" activeClassName="active">
            <h2>Impressum</h2>
          </Link>
        </div>
        <div className="flex flex-col gap-4 grow">
          <a
            href="https://maps.app.goo.gl/kcJtWPnBZ2NwwEhY8"
            target="_blank"
            rel="noopener noreferrer"
            className="grow"
          >
            <h2 className="">
              Praxis Mitter
              <br />
              Hofwiesen
              <br />
              strasse 114
              <br />
              8057 Zürich
              <br />
            </h2>
          </a>
          <div className="flex gap-4">
            <a href="tel:+499123456789">
              <h2>
                <IoMdCall className=" text-3xl" />
              </h2>
            </a>

            <Link to="/kontakt">
              <h2>
                <IoMdMail className=" text-3xl" />
              </h2>
            </Link>

            <a href="https://wa.me/1XXXXXXXXXX" target="_blank">
              <h2 className="flex">
                <h1>
                  <IoLogoWhatsapp className="text-3xl" />
                </h1>
              </h2>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">
        {today.getFullYear()} © Naturheilpraxis Mitter
      </p>
    </div>
  );
}
