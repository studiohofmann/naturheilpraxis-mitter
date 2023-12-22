import * as React from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <div className="absolute w-full z-10 flex justify-between"></div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
