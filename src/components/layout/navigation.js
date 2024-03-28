import * as React from "react";
import { Link } from "gatsby";

export default function Menue() {
  return (
    <div className="absolute w-full flex px-8 pt-8 gap-4">
      <Link to="/" className="grow z-20" activeClassName="active">
        <h1 className="">
          Praxis
          <br />
          Mitter
        </h1>
      </Link>

      <div className="flex flex-col w-2/3 gap-4 z-20">
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
      </div>
    </div>
  );
}
