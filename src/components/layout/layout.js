import * as React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="bg-orange-800">
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
