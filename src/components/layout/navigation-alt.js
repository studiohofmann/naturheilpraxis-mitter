import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Menue() {
  const [show, setShow] = useState(true);

  return (
    <div className="absolute px-6 pt-6 z-10 w-full flex justify-between mp-3">
      <Link
        to="/"
        className="mr-6 bg-zinc-500 hover:bg-green-400 duration-500 h-23 p-3"
      >
        <Logo class="fill-white h-full" />
      </Link>
      <div>
        <button
          className="relative float-right z-10"
          onClick={() => setShow(!show)}
        >
          {show ? <IoMenu /> : <IoClose />}
        </button>
        <div>
          <Box status={show} />
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div
      style={{ visibility: props.status ? "hidden" : "visible" }}
      className="absolute flex flex-wrap flex-row-reverse gap-3 h-fit right-6 left-1/3"
    >
      <Link className="mr-[4.25rem]" to="/blog">
        Blog
      </Link>

      <Link to="/schwerpunkte">Schwerpunkte</Link>

      <Link to="/kontakt">Kontakt</Link>

      <Link to="/uebermich">Über mich</Link>
    </div>
  );
}
