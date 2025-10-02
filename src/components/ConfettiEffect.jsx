import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFB6C1", "#FFD700", "#FFFFFF"], // wedding colors
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
