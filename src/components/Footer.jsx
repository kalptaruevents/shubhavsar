import React, { useEffect, useRef } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const sparkleContainerRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const container = sparkleContainerRef.current;

    // Background floating sparkles
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 50}%`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(sparkle);
    }

    // Create 8 mouse trail sparkles
    for (let i = 0; i < 8; i++) {
      const trail = document.createElement("div");
      trail.className = "sparkle-trail";
      document.body.appendChild(trail); // Add directly to body
      trailRef.current.push(trail);
    }

    // Mouse movement for trail
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      trailRef.current.forEach((el, index) => {
        setTimeout(() => {
          el.style.left = x + "px";
          el.style.top = y + "px";
        }, index * 25);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      trailRef.current.forEach((t) => document.body.removeChild(t));
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative w-full py-6 bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 text-white text-center overflow-hidden">
      {/* Background sparkles */}
      <div
        ref={sparkleContainerRef}
        className="absolute inset-0 pointer-events-none"
      ></div>

      {/* Social Icons */}
      <div className="mb-4 flex justify-center space-x-6 relative z-10">
        <a
          href="https://www.instagram.com/shubhavsareventsindia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-100 transition-colors text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com/@shubhavsareventssurat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors text-3xl"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm relative z-10">
        © 2025 Shubh Avsar Events. All Rights Reserved.
      </div>

      {/* Sparkle CSS */}
      <style>
        {`
          .sparkle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: rgba(255,255,255,0.8);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255,255,255,0.9);
            opacity: 0.7;
            animation: float-diagonal linear infinite;
          }

          .sparkle-trail {
            position: fixed;
            width: 6px;
            height: 6px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            box-shadow: 0 0 12px rgba(255,255,255,1);
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: trail-glow 1.5s infinite alternate;
          }

          @keyframes float-diagonal {
            0% { transform: translate(0,0) scale(0.5); opacity:0.5; }
            50% { transform: translate(20px,-20px) scale(1); opacity:1; }
            100% { transform: translate(0,0) scale(0.5); opacity:0.5; }
          }

          @keyframes trail-glow {
            0% { transform: translate(-50%, -50%) scale(0.6); opacity:0.5; background:#fff;}
            50% { transform: translate(-50%, -50%) scale(1); opacity:1; background:#ffeaaa;}
            100% { transform: translate(-50%, -50%) scale(0.6); opacity:0.5; background:#fff;}
          }
        `}
      </style>
    </footer>
  );
}
