// src/components/Wedding3DSection.jsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Card = ({ position, image, index }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    // subtle rotation
    ref.current.rotation.y += 0.002;
  });

  const handleClick = () => {
    // trigger a mini confetti burst on click
    confetti({
      particleCount: 15,
      spread: 60,
      origin: { x: 0.5, y: 0.5 },
      gravity: 0.5,
    });
  };

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <boxGeometry args={[2, 3, 0.2]} />
      <meshStandardMaterial
        color={hovered ? "#ffefc2" : "#fff0f5"}
        metalness={0.3}
        roughness={0.6}
      />
      <Html
        distanceFactor={1.5}
        position={[0, 0, 0.11]}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={image}
          alt={`Card ${index}`}
          className="w-48 h-72 rounded-lg shadow-lg"
        />
      </Html>
    </mesh>
  );
};

export default function Wedding3DSection() {
  const [dragX, setDragX] = useState(0);
  const cards = [
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/portfolio3.jpg",
  ];

  return (
    <div className="w-full h-[600px] my-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {cards.map((img, i) => (
          <Card
            key={i}
            index={i}
            image={img}
            position={[i * 3 + dragX, 0, 0]}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Swipe Controls */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] cursor-grab"
        onPointerDown={(e) => {
          const startX = e.clientX;
          const handleMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            setDragX(deltaX * 0.02);
          };
          const handleUp = () => {
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerup", handleUp);
          };
          window.addEventListener("pointermove", handleMove);
          window.addEventListener("pointerup", handleUp);
        }}
      ></div>
    </div>
  );
}
