import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Text, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingText = () => {
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        font="https://fonts.gstatic.com/s/inter/v12/UcCOjFwrHD5lLXvnMnyF.woff"
        fontSize={1.5}
        color="#F27D26"
        anchorX="center"
        anchorY="middle"
      >
        ZA
      </Text>
    </Float>
  );
};

const RotatingBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#F27D26" wireframe />
    </mesh>
  );
};

export const ZAScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingText />
        <RotatingBox />
      </Canvas>
    </div>
  );
};
