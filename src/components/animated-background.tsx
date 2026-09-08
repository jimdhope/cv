'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 150;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 15,
        ],
        scale: Math.random() * 0.08 + 0.02,
        speed: Math.random() * 0.8 + 0.3,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    particles.forEach((particle, i) => {
      position.set(
        particle.position[0] + Math.sin(time * particle.speed * 0.3 + particle.offset) * 1,
        particle.position[1] + Math.cos(time * particle.speed * 0.2 + particle.offset) * 0.6,
        particle.position[2] + Math.sin(time * particle.speed * 0.1 + particle.offset) * 0.4
      );
      scale.setScalar(particle.scale * (1 + Math.sin(time * 0.5 + particle.offset) * 0.3));
      matrix.compose(position, quaternion, scale);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color="#a5b4fc" transparent opacity={0.9} />
    </instancedMesh>
  );
}

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.z = time * 0.05;
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -8]}>
        <ringGeometry args={[4, 4.1, 64]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -8]} rotation={[0.3, 0, 0.2]}>
        <ringGeometry args={[6, 6.15, 64]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -8]} rotation={[-0.2, 0.4, 0]}>
        <ringGeometry args={[8, 8.2, 64]} />
        <meshBasicMaterial color="#4f46e5" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function GlowingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(time * 0.15) * 5;
      orb1Ref.current.position.y = Math.cos(time * 0.2) * 3;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(time * 0.1) * 4;
      orb2Ref.current.position.y = Math.sin(time * 0.12) * 4;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[0, 0, -6]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.15} />
      </mesh>
      <mesh ref={orb2Ref} position={[0, 0, -6]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.12} />
      </mesh>
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <FloatingParticles />
        <FloatingRings />
        <GlowingOrbs />
      </Canvas>
    </div>
  );
}
