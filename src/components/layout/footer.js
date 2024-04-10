import * as React from "react";
import Newsletter from "./newsletter";
import Footermap from "./footermap";
import Menuefooter from "./menuefooter";

export default function Footer() {
  const today = new Date();

  return (
    <div className="bg-blue px-8 pt-16 pb-4 lg:flex lg:w-3/4 lg:float-right">
      <Newsletter />
      <div className="flex gap-4 mt-16 mb-8">
        <div className="grow">
          <Menuefooter />
        </div>
        <div className="">
          <Footermap />
        </div>
      </div>
      <p className="text-center text-sm lg:hidden">
        {today.getFullYear()} © Naturheilpraxis Mitter
      </p>
    </div>
  );
}
