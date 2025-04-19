"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE for type definitions
import "../globals.css";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

function InteractiveBox() {
  const meshRef = useRef<THREE.Mesh | null>(null); // Explicitly type the ref
  const [hovered, setHovered] = useState(false); // State for hover effect
  const [clicked, setClicked] = useState(false); // State for click effect
  const mousePosition = useRef({ x: 0, y: 0 }); // Track mouse position
  const lastMouseMove = useRef(Date.now()); // Track last mouse movement time

  // Update mouse position globally
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
      const y = -(clientY / window.innerHeight) * 2 + 1; // Normalize to -1 to 1
      mousePosition.current = { x, y };
      lastMouseMove.current = Date.now(); // Update last movement time
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotate the box based on mouse movement or slowly when idle
  useFrame(() => {
    if (meshRef.current) {
      const { x, y } = mousePosition.current;
      const now = Date.now();

      // If mouse hasn't moved recently, rotate slowly
      if (now - lastMouseMove.current > 500) {
        meshRef.current.rotation.x += 0.005; // Slow rotation on X-axis
        meshRef.current.rotation.y += 0.005; // Slow rotation on Y-axis
      } else {
        // Rotate based on mouse position (slower movement)
        meshRef.current.rotation.x +=
          (y * Math.PI - meshRef.current.rotation.x) * 0.02;
        meshRef.current.rotation.y +=
          (x * Math.PI - meshRef.current.rotation.y) * 0.02;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 1.5 : 1} // Scale up when clicked
      onClick={() => setClicked(!clicked)} // Toggle click state
      onPointerOver={() => setHovered(true)} // Set hover state
      onPointerOut={() => setHovered(false)} // Reset hover state
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? "lime" : "green"}
        emissive="lime"
        emissiveIntensity={0.5}
        wireframe={false}
      />
    </mesh>
  );
}

export default function Landing() {
  return (
    <div
      style={{ backgroundColor: "#070F1A" }}
      className="w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide landing-container"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 auto-rows-auto place-items-center">
        {/* Left Div */}
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h2 className="text-xl md:text-4xl font-bold text-green-400 leading-tight">
            A <span className="text-blue-500">Frontend & Game Developer</span>{" "}
            <br />
            Crafting Engaging Experiences <br />
            and Helping Ideas Come to Life
          </h2>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-sm md:max-w-lg mb-5">
            I am a software engineer with more than four years of experience.
            Recognized as a practical and effective developer, I specialize in
            creating inspiring UI designs and engaging user experiences to bring
            imaginative ideas to life.
          </p>
          <button className="btn btn-background-slide flex items-center justify-center text-[#77e777] border-[#77e777] margin-top-button">
            <h1 className="text-lg font-bold">START</h1>
            <div className="btn-background-slide--pink btn-background-slide-bg"></div>
          </button>
        </div>

        {/* Right Div */}
        <div className="w-full h-full flex items-center justify-center text-white">
          <Canvas shadows>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />
            <InteractiveBox />
            <mesh receiveShadow position={[0, -2, 0]}>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
