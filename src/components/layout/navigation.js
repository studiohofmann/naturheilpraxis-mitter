import * as React from "react";
import { Link } from "gatsby";
import Menue from "./menue";

export default function Navigation() {
  const today = new Date();

  return (
    <div className="absolute w-full flex px-8 pt-8 gap-4 z-10 text-right">
      <Link to="/" className="" activeClassName="active">
        <h1>
          Praxis
          <br />
          Mitter
        </h1>
      </Link>
      <Menue />
    </div>
  );
}
