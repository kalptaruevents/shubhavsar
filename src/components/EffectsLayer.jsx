

import React, { useEffect, useRef } from "react";

export default function EffectsLayer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // --- Confetti flowers ---
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(confetti);
    }

    // --- Smoke bubbles / dry ice mist ---
    for (let i = 0; i < 15; i++) {
      const smoke = document.createElement("div");
      smoke.className = "smoke-bubble";
      smoke.style.left = `${Math.random() * 100}%`;
      smoke.style.top = `${Math.random() * 80 + 10}%`;
      container.appendChild(smoke);
    }

    // --- Follow lights ---
    const light = document.createElement("div");
    light.className = "follow-light";
    container.appendChild(light);

    const handleMouseMove = (e) => {
      light.style.left = e.clientX + "px";
      light.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      <style>
        {`
        /* Confetti petals */
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background: linear-gradient(to bottom, #FFD700, #FF69B4);
          border-radius: 50% 50% 50% 50%;
          opacity: 0.8;
          animation: confetti-fall 6s linear infinite;
        }
        @keyframes confetti-fall {
          0% { transform: translateY(-50px) rotate(0deg); opacity:1; }
          100% { transform: translateY(120vh) rotate(360deg); opacity:0; }
        }

        /* Smoke bubbles / dry ice */
        .smoke-bubble {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(200,200,200,0.3) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          animation: smoke-rise 8s linear infinite;
        }
        @keyframes smoke-rise {
          0% { transform: translateY(100%); opacity:0.2; }
          50% { opacity:0.5; }
          100% { transform: translateY(-20%); opacity:0; }
        }

        /* Follow light (mouse spotlight) */
        .follow-light {
          position: fixed;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.05s, top 0.05s;
        }

        `}
      </style>
    </div>
  );
}

