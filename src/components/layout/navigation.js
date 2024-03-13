import * as React from "react";
import { Link } from "gatsby";

export default function Menue() {
  return (
    <div className="flex">
      <Link to="/" className="bg-green-300 grow">
        <h1 className="p-5 text-white">
          Praxis
          <br />
          Mitter
        </h1>
      </Link>

      <div className="flex flex-col bg-gray-400 px-5 pt-5 pb-5 w-2/3">
        <Link to="/schwerpunkte" className="bg-green-300 mb-2">
          <h1>Schwerpunkte</h1>
        </Link>
        <Link to="/uebermich" className="bg-green-300 mb-2">
          <h1>Über mich</h1>
        </Link>
        <Link to="/blog" className="bg-green-300 mb-2">
          <h1>Blog</h1>
        </Link>
        <Link to="/kontakt" className="bg-green-300">
          <h1>Kontakt</h1>
        </Link>
      </div>
    </div>
  );
}
