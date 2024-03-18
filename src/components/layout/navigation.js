import * as React from "react";
import { Link } from "gatsby";

export default function Menue() {
  return (
    <div className="absolute w-full flex">
      <Link to="/" className="grow z-20" activeClassName="active">
        <h1 className="p-2">
          Praxis
          <br />
          Mitter
        </h1>
      </Link>

      <div className="flex flex-col px-3 pt-3 w-2/3 gap-3 z-20">
        <Link to="/schwerpunkte" activeClassName="active">
          <h1>Schwerpunkte</h1>
        </Link>
        <Link to="/uebermich" activeClassName="active">
          <h1>Über mich</h1>
        </Link>
        <Link to="/blog" activeClassName="active">
          <h1>Blog</h1>
        </Link>
        <Link to="/kontakt" activeClassName="active">
          <h1>Kontakt</h1>
        </Link>
      </div>
    </div>
  );
}
