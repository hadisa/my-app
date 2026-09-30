import React, { useState } from "react";
import Button from "../components/Button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isClose, setIsClose] = useState(true);

  function toggleMenu() {
    setIsClose(!isClose);
    console.log(isClose);
  }
  return (
    <nav className="w-full fix top-0 bg-white border border-b-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div className="font-bold text-amber-800 text-2xl ">
            <h1>Modernism</h1>
          </div>
          {/* links */}
          <div className="hidden md:block">
            <div className="space-x-4">
              <a
                href="/"
                className="text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                About
              </a>
              <a
                href="/service"
                className="text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Projects
              </a>
              <a
                href="/"
                className="text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Portfolio
              </a>
            </div>
          </div>
          {/* get start button */}
          <div className="hidden md:block">
            <Button text="Get Started" />
          </div>

          {/*mobile menu button*/}
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        {/* mobile menu */}

        <div className="md:hidden">
          {isClose && (
            <div className="space-y-4 border-t border-stone-200 p-4">
              <a
                href="/"
                className="block text-stone-8isClose00 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="block text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="block text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Services
              </a>
              <a
                href="/"
                className="block text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Projects
              </a>
              <a
                href="/"
                className=" block text-stone-800 py-2 px-3 hover:text-amber-800 font-medium"
              >
                Portfolio
              </a>
              <Button
                text="View Our Work"
                sty="bg-white border border-amber-800 text-amber-800 hover:text-stone-700"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;