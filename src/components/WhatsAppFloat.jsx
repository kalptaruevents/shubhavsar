import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6352332437" // replace with your WhatsApp number
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg 
                 animate-bounce hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}
