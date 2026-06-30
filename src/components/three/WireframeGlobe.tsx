import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate globe points
  const globePoints = useMemo(() => {
    const pts: number[] = [];
    const count = 2000;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi) * 2;
      const y = Math.sin(theta) * Math.sin(phi) * 2;
      const z = Math.cos(phi) * 2;
      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Points on globe */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={globePoints.length / 3}
            array={globePoints}
            itemSize={3}
            args={[globePoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#8b5cf6"
          size={0.015}
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>

      {/* Glowing connection points */}
      {[
        [1.2, 0.8, 1.4],
        [-1.5, 0.5, 1.0],
        [0.3, -1.5, 1.2],
        [-0.8, 1.2, -1.3],
        [1.0, -0.3, -1.6],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.8} />
        </mesh>
      ))}

      <ambientLight intensity={0.3} />
    </group>
  );
}
