import * as React from "react";

import Menue from "./menue";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <div className="absolute w-full h-full z-10 flex justify-between"></div>
      <main>
        <Menue />
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
