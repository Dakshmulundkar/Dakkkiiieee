import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    uniforms.uTime.value = t;

    // Smooth follow mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.normalizedY * 0.3,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.normalizedX * 0.3,
      0.05
    );
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={512}
          thickness={1}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          color="#38bdf8"
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner Soft Glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.01}
        />
      </mesh>

      {/* Subtle Orbital Ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]} scale={2.5}>
        <torusGeometry args={[1, 0.002, 16, 120]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.15} />
      </mesh>

      {/* Lighting Architecture */}
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
    </Float>
  );
}
