"use client"

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
};

const WebGLCanvas = () => {
  return (
    <Canvas style={{ width: '640px', height: '480px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Canvas>
  );
};

export default WebGLCanvas;
