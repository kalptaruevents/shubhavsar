import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useInView } from "react-intersection-observer";

export default function ScrollEffects() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (heroInView) {
      confetti({
        particleCount: 50,
        spread: 120,
        origin: { y: 0.6 },
        colors: ["#FFB6C1", "#FFD700", "#FFFFFF"],
      });
    }
  }, [heroInView]);

  useEffect(() => {
    if (portfolioInView) {
      confetti({
        particleCount: 100,
        spread: 200,
        origin: { y: 0.6 },
        colors: ["#FFC0CB", "#FFD700", "#FF69B4"],
      });
    }
  }, [portfolioInView]);

  return (
    <>
      <div ref={heroRef}></div>
      <div ref={portfolioRef}></div>
    </>
  );
}
