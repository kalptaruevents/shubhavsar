import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Logo from "../assets/shubh-avsar-logo.png";

export default function HeroThree() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = 520;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Floating spheres
    const group = new THREE.Group();
    for (let i = 0; i < 25; i++) {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(Math.random() * 0.25 + 0.08, 16, 16),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(`hsl(${Math.random() * 40 + 20}, 80%, 65%)`),
          transparent: true,
          opacity: 0.9,
        })
      );
      sphere.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 6
      );
      group.add(sphere);
    }
    scene.add(group);

    // Rotating ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.06, 16, 100),
      new THREE.MeshStandardMaterial({ color: "#FFD166" })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.5;
    scene.add(ring);

    // Glow particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
      );
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      );
      scene.add(particle);
      particles.push(particle);
    }

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouseMove);

    // Animation
    const animate = () => {
      group.children.forEach((sphere, i) => {
        sphere.position.y += Math.sin(Date.now() * 0.0003 + i) * 0.001;
        sphere.rotation.y += 0.002;
      });

      ring.rotation.z += 0.002;

      group.rotation.y += 0.002 + mouseX * 0.01;
      group.rotation.x += mouseY * 0.01;

      particles.forEach((p, i) => {
        p.position.y += Math.sin(Date.now() * 0.0001 + i) * 0.0005;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <header id="home" className="relative w-full overflow-hidden">
      <div
        ref={mountRef}
        className="w-full h-[520px]"
        style={{ background: "linear-gradient(135deg, #FFD166 0%, #FF8AB3 100%)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <img src={Logo} alt="Shubh Avsar Logo" className="w-32 md:w-40 mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400 text-center">
          Shubh Avsar Events
        </h1>
        <p className="mt-2 md:mt-3 text-lg md:text-xl text-white/90 text-center">
          Where moments become lifetime memories
        </p>
      </div>
    </header>
  );
}
