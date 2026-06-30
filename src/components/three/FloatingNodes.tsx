import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { SKILL_CATEGORIES } from '@/data/skills';

export default function FloatingNodes() {
  const nodes = useMemo(() => {
    return SKILL_CATEGORIES.map((cat, i) => {
      const angle = (i / SKILL_CATEGORIES.length) * Math.PI * 2;
      const radius = 4;
      return {
        id: cat.name,
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 2] as [number, number, number],
        color: cat.color,
      };
    });
  }, []);

  return (
    <group>
      {nodes.map((node, i) => (
        <Node key={node.id} {...node} />
      ))}
      
      {/* Dynamic connections */}
      {nodes.map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        return (
          <Line
            key={`line-${i}`}
            points={[node.position, [0, 0, 0], nextNode.position]}
            color={node.color}
            lineWidth={0.5}
            transparent
            opacity={0.1}
          />
        );
      })}
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
    </group>
  );
}

function Node({ position, color, id }: { position: [number, number, number], color: string, id: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(t + position[0]) * 0.002;
  });

  // Remap data colors to our new palette if they are old violet ones
  const finalColor = color.includes('8b5cf6') ? '#38bdf8' : color;

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial 
          color={finalColor} 
          emissive={finalColor} 
          emissiveIntensity={1.5} 
          metalness={0.9} 
          roughness={0.1}
          transmission={0.5}
          thickness={0.5}
        />
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.15}
          color="white"
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFto44Cv6rr7fNdF7S.woff"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.6}
        >
          {id}
        </Text>
      </mesh>
    </Float>
  );
}
