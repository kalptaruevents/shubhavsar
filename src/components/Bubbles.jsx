import React from "react";

export default function Bubbles() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10 overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-white/30 rounded-full animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            bottom: `-${Math.random() * 20}px`,
          }}
        />
      ))}
    </div>
  );
}
