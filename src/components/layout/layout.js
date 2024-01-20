import * as React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
