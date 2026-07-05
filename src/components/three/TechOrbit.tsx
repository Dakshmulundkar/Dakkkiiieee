import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function TechOrbit() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group scale={1.5}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 16, 16]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            speed={2}
            distort={0.4}
            radius={1}
            roughness={0}
            metalness={0.8}
            emissive="#0ea5e9"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
      
      {/* Decorative rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
         <torusGeometry args={[1.5, 0.005, 8, 60]} />
         <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
         <torusGeometry args={[1.8, 0.005, 8, 60]} />
         <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
