import React from "react";

export default function SmokeEffect() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 bg-white/10 rounded-full blur-3xl animate-smoke"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 50}px`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
