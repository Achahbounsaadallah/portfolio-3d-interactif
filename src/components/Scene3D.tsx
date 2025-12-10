import { useRef, Suspense, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, geometry }: { 
  position: [number, number, number]; 
  color: string; 
  geometry: 'icosahedron' | 'torus' | 'octahedron'
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const Geometry = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[0.6, 0.25, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.7]} />;
      default:
        return <icosahedronGeometry args={[0.7, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {Geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.15}
        />
      </mesh>
    </Float>
  );
}

function MainSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.05 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#14b8a6"
          roughness={0.1}
          metalness={0.9}
          emissive="#14b8a6"
          emissiveIntensity={hovered ? 0.3 : 0.1}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0ea5e9" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      
      <MainSphere />
      <FloatingShape position={[3, 1, -2]} color="#0ea5e9" geometry="icosahedron" />
      <FloatingShape position={[-3, -1, -1]} color="#06b6d4" geometry="octahedron" />
      <FloatingShape position={[-2, 2, -3]} color="#14b8a6" geometry="torus" />
      <FloatingShape position={[2.5, -1.5, -2]} color="#0891b2" geometry="torus" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

interface Scene3DProps {
  className?: string;
}

export default function Scene3D({ className }: Scene3DProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
}
