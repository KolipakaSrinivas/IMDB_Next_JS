import Link from "next/link";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between max-w-6xl mx-auto p-3 items-center">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link className="flex gap-1 items-center" href={"/"}>
        <span className="bg-amber-500 py-2 px-1 text-2xl font-bold rounded-lg">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline">CLONE</span>
      </Link>
    </div>
  );
}

export default Header;
