import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

export default function Scene({
  children,
  className = '',
  camera = { position: [0, 0, 5], fov: 45 },
}: SceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={camera}
        dpr={[1, 2]} // Support high-DPI but cap at 2x
        frameloop="demand" // Performance Critical: Only render on change
        performance={{ min: 0.5 }}
        gl={{
          antialias: false, // Turn off for performance, use post-process or dpr instead
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
