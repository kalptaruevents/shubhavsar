import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import confetti from "canvas-confetti";

export default function EffectsLayer() {
  const canvasRef = useRef();

  useEffect(() => {
    // Trigger confetti on page load
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      gravity: 0.8,
    });

    // Repeat small bursts every few seconds
    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: Math.random(), y: 0 },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
      {/* Canvas for Three.js effects */}
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* Sparkles for dry ice / wedding magical effect */}
        <Sparkles
          count={200}
          scale={5}
          size={2}
          speed={0.5}
          color="white"
          opacity={0.6}
        />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>

      {/* Smoke / bubbles layer with CSS */}
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse -top-32 left-1/4"></div>
        <div className="absolute w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse -bottom-16 right-1/3"></div>
        <div className="absolute w-32 h-32 bg-white/30 rounded-full blur-xl animate-pulse top-1/2 left-1/2"></div>
      </div>
    </div>
  );
}
