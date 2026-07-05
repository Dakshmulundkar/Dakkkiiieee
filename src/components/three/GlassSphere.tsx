import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Use a ref-based listener to avoid React re-renders on mouse move
  useMemo(() => {
    if (typeof window === 'undefined') return;
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth follow mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouseRef.current.y * 0.3,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouseRef.current.x * 0.3,
      0.05
    );
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          transparent
          opacity={0.25}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Inner Soft Glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.01}
        />
      </mesh>

      {/* Subtle Orbital Ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={2.5}>
        <torusGeometry args={[1, 0.002, 8, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.15} />
      </mesh>

      {/* Lighting Architecture */}
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
    </Float>
  );
}
