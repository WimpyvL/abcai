import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);

  // Define layers and nodes
  const layers = [5, 8, 8, 5];
  const layerSpacing = 3.5;
  const nodeSpacing = 1.5;

  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    layers.forEach((count, i) => {
      const x = (i - (layers.length - 1) / 2) * layerSpacing;
      for (let j = 0; j < count; j++) {
        const y = (j - (count - 1) / 2) * nodeSpacing;
        points.push(new THREE.Vector3(x, y, 0));
      }
    });
    return points;
  }, []);

  const connections = useMemo(() => {
    const lines: THREE.Vector3[] = [];
    let offset = 0;
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayerCount = layers[i];
      const nextLayerCount = layers[i + 1];
      const nextOffset = offset + currentLayerCount;

      for (let j = 0; j < currentLayerCount; j++) {
        for (let k = 0; k < nextLayerCount; k++) {
          lines.push(nodes[offset + j]);
          lines.push(nodes[nextOffset + k]);
        }
      }
      offset += currentLayerCount;
    }
    return lines;
  }, [nodes]);

  // Data pulses animation
  const pulses = useMemo(() => {
    return Array.from({ length: 24 }).map(() => ({
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.008,
      connectionIndex: Math.floor(Math.random() * (connections.length / 2)) * 2
    }));
  }, [connections]);

  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.05;
    }

    pulses.forEach((pulse, i) => {
      pulse.progress += pulse.speed;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.connectionIndex = Math.floor(Math.random() * (connections.length / 2)) * 2;
      }

      if (pulseRefs.current[i]) {
        const start = connections[pulse.connectionIndex];
        const end = connections[pulse.connectionIndex + 1];
        pulseRefs.current[i].position.lerpVectors(start, end, pulse.progress);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#141414" transparent opacity={0.2} />
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length}
            array={new Float32Array(connections.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial ref={lineMaterialRef} color="#141414" transparent opacity={0.05} />
      </lineSegments>

      {/* Pulses */}
      {pulses.map((_, i) => (
        <mesh key={i} ref={(el) => (pulseRefs.current[i] = el!)}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#F27D26" emissive="#F27D26" emissiveIntensity={2} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export const HeroScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <NeuralNetwork />
        </Float>
      </Canvas>
    </div>
  );
};
