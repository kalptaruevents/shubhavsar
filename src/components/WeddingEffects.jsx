// src/components/WeddingEffects.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useGesture } from "@use-gesture/react";
import confetti from "canvas-confetti";

// Floating bubble
function Bubble({ position, scale }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.position.y += 0.01;
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.003;
    if (ref.current.position.y > 5) ref.current.position.y = -2;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#f9f9ff" transparent opacity={0.5} />
    </mesh>
  );
}

// 3D Card with drag/swipe
function Card({ card, index, position, bind }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.002; // subtle rotation
  });
  return (
    <mesh ref={ref} position={position} {...bind()}>
      <boxGeometry args={[2, 1, 0.3]} />
      <meshStandardMaterial color={card.color} />
      <Html position={[0, 0, 0.18]}>
        <div className="w-40 h-20 flex items-center justify-center text-center text-white font-bold shadow-lg select-none">
          {card.title}
        </div>
      </Html>
    </mesh>
  );
}

// Confetti on scroll with throttle
function ConfettiTrigger() {
  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        confetti({
          particleCount: 30,
          spread: 120,
          origin: { y: 0.6 },
          colors: ["#ff69b4", "#ffd700", "#ff6347", "#ff4500"],
        });
        setTimeout(() => (ticking = false), 400);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return null;
}

// Pyro flare particles
function Pyro({ position }) {
  const ref = useRef();
  const [life, setLife] = useState(Math.random() * 100);
  useFrame(() => {
    ref.current.position.y += 0.05;
    ref.current.material.opacity = Math.max(0, 1 - life / 100);
    setLife((prev) => (prev > 0 ? prev - 1 : 100));
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="#ff4500" transparent opacity={1} />
    </mesh>
  );
}

export default function WeddingEffects() {
  const [bubbles] = useState(
    Array.from({ length: 15 }, () => [
      Math.random() * 6 - 3,
      Math.random() * 4 - 2,
      Math.random() * 2 - 1,
    ])
  );
  const [pyros] = useState(
    Array.from({ length: 10 }, () => [
      Math.random() * 4 - 2,
      Math.random() * 2,
      Math.random() * 2 - 1,
    ])
  );

  const cards = [
    { color: "#ff6347", title: "Haldi & Carnival" },
    { color: "#ffd700", title: "Sangeet LED Effects" },
    { color: "#ff69b4", title: "Barat & Vintage Cars" },
    { color: "#ffa500", title: "Full Event Production" },
  ];

  // Drag/swipe state
  const positionsRef = useRef(cards.map((_, i) => [-2 + i * 1.8, 0, -i]));

  const bind = useGesture({
    onDrag: ({ movement: [mx], args: [i] }) => {
      positionsRef.current[i][0] = -2 + i * 1.8 + mx * 0.01;
    },
  });

  return (
    <div className="w-full h-[700px] md:h-[900px] relative my-10">
      <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* 3D Cards */}
        {cards.map((c, i) => (
          <Card
            key={i}
            card={c}
            index={i}
            position={positionsRef.current[i]}
            bind={() => bind(i)}
          />
        ))}

        {/* Floating bubbles */}
        {bubbles.map((pos, i) => (
          <Bubble key={i} position={pos} scale={[0.3, 0.3, 0.3]} />
        ))}

        {/* Pyro flare particles */}
        {pyros.map((pos, i) => (
          <Pyro key={i} position={pos} />
        ))}

        {/* Fog for dry ice */}
        <fog attach="fog" args={["#fce4ec", 5, 15]} />
      </Canvas>

      {/* Scroll confetti */}
      <ConfettiTrigger />
    </div>
  );
}
