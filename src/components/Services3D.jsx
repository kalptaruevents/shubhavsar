import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

// Individual 3D Card
function ServiceCard({ position, title, children, index }) {
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      // slow rotation for floating effect
      ref.current.rotation.y = Math.sin(Date.now() / 2000 + index) * 0.2;
      ref.current.rotation.x = Math.cos(Date.now() / 2500 + index) * 0.1;
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[3, 2, 0.2]} />
      <meshStandardMaterial color="#f9d6b1" metalness={0.5} roughness={0.6} />
      <Html center>
        <div className="w-72 p-4 text-center bg-white/80 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm">{children}</p>
        </div>
      </Html>
    </mesh>
  );
}

export default function Services3D() {
  return (
    <div className="w-full h-[600px] md:h-[700px] my-20">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <ServiceCard
            index={0}
            position={[-4, 1.5, 0]}
            title="Download Checklist"
          >
            Access our detailed client meeting checklist (PDF) for planning.
          </ServiceCard>
          <ServiceCard
            index={1}
            position={[0, 0, 0]}
            title="Haldi & Carnival"
          >
            Unique concepts with decor, lighting & stage setup.
          </ServiceCard>
          <ServiceCard
            index={2}
            position={[4, -1.5, 0]}
            title="Sangeet & LED Effects"
          >
            Sangeet with LED visuals, music, and interactive lighting.
          </ServiceCard>
          <ServiceCard
            index={3}
            position={[0, -3, 0]}
            title="Barat & Vintage Cars"
          >
            Full barat experience with vintage cars and grand entrance.
          </ServiceCard>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
