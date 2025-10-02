import React from "react";
import Logo from "../assets/shubh-avsar-logo.png";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 shadow-md fixed top-0 z-50">
      <div className="flex items-center">
        <img src={Logo} alt="Shubh Avsar Logo" className="w-12 md:w-16 mr-3" />
        <span className="text-white font-bold text-xl md:text-2xl">Shubh Avsar</span>
      </div>
      <ul className="hidden md:flex space-x-6 text-white font-medium">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
