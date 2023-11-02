import * as React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="bg-orange-800 flex justify-between">
        <Logo />
        <Navigation />
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
