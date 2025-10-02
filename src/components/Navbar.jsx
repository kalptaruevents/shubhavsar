import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/shubh-avsar-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "Services", "Portfolio", "Testimonials", "Contact"];

  return (
    <nav className="w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-l from-pink-600 via-yellow-400 to-yellow-300 shadow-lg fixed top-0 z-50">
      <div className="flex items-center space-x-3 cursor-pointer group">
        <img
          src={Logo}
          alt="Shubh Avsar Logo"
          className="w-12 md:w-16 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
        />
        <span className="text-white font-dancing text-2xl md:text-3xl tracking-wide group-hover:text-yellow-100 transition-colors">
          Shubh Avsar
        </span>
      </div>

      <ul className="hidden md:flex space-x-6 font-medium text-white drop-shadow-md">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`absolute top-20 left-0 w-full bg-gradient-to-l from-pink-600 via-yellow-400 to-yellow-300 shadow-lg md:hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center py-6 space-y-4 font-medium text-white drop-shadow-md">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg hover:text-yellow-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
