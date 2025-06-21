import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// 3D Paper Roll Component
const PaperRoll: React.FC<{position: [number, number, number];}> = ({ position }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} data-id="256m1r28h" data-path="src/components/ThreeScene.tsx">
      <mesh position={position} data-id="yobpmb2ps" data-path="src/components/ThreeScene.tsx">
        <cylinderGeometry args={[0.5, 0.5, 2, 16]} data-id="vrbond9sz" data-path="src/components/ThreeScene.tsx" />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.3}
          metalness={0.1}
          emissive="#00ffff"
          emissiveIntensity={0.1} data-id="zceba88jx" data-path="src/components/ThreeScene.tsx" />

      </mesh>
    </Float>);

};

// 3D Printing Machine Component
const PrintingMachine: React.FC<{position: [number, number, number];}> = ({ position }) => {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3} data-id="ebeuhq6iv" data-path="src/components/ThreeScene.tsx">
      <group position={position} data-id="e0psyftch" data-path="src/components/ThreeScene.tsx">
        {/* Main body */}
        <mesh data-id="t2nj2vvai" data-path="src/components/ThreeScene.tsx">
          <boxGeometry args={[2, 1, 1.5]} data-id="8aesbb71i" data-path="src/components/ThreeScene.tsx" />
          <meshStandardMaterial
            color="#2a2a3a"
            roughness={0.4}
            metalness={0.8}
            emissive="#008080"
            emissiveIntensity={0.05} data-id="9e1ho0vfw" data-path="src/components/ThreeScene.tsx" />

        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.3, 0.76]} data-id="wl5k5oj62" data-path="src/components/ThreeScene.tsx">
          <boxGeometry args={[0.8, 0.5, 0.02]} data-id="hgqz13ep7" data-path="src/components/ThreeScene.tsx" />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3} data-id="i7tsgms92" data-path="src/components/ThreeScene.tsx" />

        </mesh>
      </group>
    </Float>);

};

// Security Shield Component
const SecurityShield: React.FC<{position: [number, number, number];}> = ({ position }) => {
  const shieldGeometry = new THREE.ShapeGeometry();

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6} data-id="69iilr0ad" data-path="src/components/ThreeScene.tsx">
      <mesh position={position} rotation={[0, 0, 0]} data-id="s4ypyhgbc" data-path="src/components/ThreeScene.tsx">
        <cylinderGeometry args={[0.8, 0.6, 0.1, 6]} data-id="mj3bumbhl" data-path="src/components/ThreeScene.tsx" />
        <meshStandardMaterial
          color="#008080"
          roughness={0.2}
          metalness={0.9}
          emissive="#00ffff"
          emissiveIntensity={0.2} data-id="y0mjla0v6" data-path="src/components/ThreeScene.tsx" />

      </mesh>
    </Float>);

};

// Particle System
const Particles: React.FC = () => {
  const particlesRef = React.useRef<THREE.Points>(null);

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef} data-id="7nbcbenag" data-path="src/components/ThreeScene.tsx">
      <bufferGeometry data-id="e0y1mdt3l" data-path="src/components/ThreeScene.tsx">
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3} data-id="1784uvdoz" data-path="src/components/ThreeScene.tsx" />

      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation data-id="xbh0lxtch" data-path="src/components/ThreeScene.tsx" />

    </points>);

};

// Loading Fallback
const LoadingFallback: React.FC = () =>
<div className="flex items-center justify-center h-full" data-id="t0gvrgqah" data-path="src/components/ThreeScene.tsx">
    <div className="spinner" data-id="7nv926ccw" data-path="src/components/ThreeScene.tsx" />
  </div>;


const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full" data-id="yapsmnqxl" data-path="src/components/ThreeScene.tsx">
      <Suspense fallback={<LoadingFallback data-id="equkv1ihi" data-path="src/components/ThreeScene.tsx" />} data-id="4c9t76aj2" data-path="src/components/ThreeScene.tsx">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          style={{ background: 'transparent' }} data-id="ncm0iaosi" data-path="src/components/ThreeScene.tsx">

          {/* Lighting */}
          <ambientLight intensity={0.4} data-id="7nz6sqchk" data-path="src/components/ThreeScene.tsx" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" data-id="6eky71t3u" data-path="src/components/ThreeScene.tsx" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#008080" data-id="bp4ru5t3a" data-path="src/components/ThreeScene.tsx" />
          <spotLight
            position={[0, 20, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color="#ffffff" data-id="2zbfybvj5" data-path="src/components/ThreeScene.tsx" />


          {/* 3D Objects */}
          <PaperRoll position={[-3, 1, 0]} data-id="x6tvne4rr" data-path="src/components/ThreeScene.tsx" />
          <PrintingMachine position={[0, 0, 0]} data-id="is50tveie" data-path="src/components/ThreeScene.tsx" />
          <SecurityShield position={[3, -1, 0]} data-id="am679c5c0" data-path="src/components/ThreeScene.tsx" />
          
          {/* Particles */}
          <Particles data-id="tgcorsdgs" data-path="src/components/ThreeScene.tsx" />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2} data-id="qb75dfbeh" data-path="src/components/ThreeScene.tsx" />

        </Canvas>
      </Suspense>
    </div>);

};

export default ThreeScene;