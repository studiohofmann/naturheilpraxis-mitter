import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/specialization">Schwerpunkte</Link>
          </li>
          <li>
            <Link to="/services">Leistungen</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
