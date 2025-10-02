import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 via-yellow-100 to-yellow-200 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pink-600">Contact Us</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-700">
        Reach out to plan your dream event with us.
      </p>
      <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-pink-600 transition-all duration-500">
        Get In Touch
      </button>
    </section>
  );
}
