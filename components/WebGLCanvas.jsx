"use client"

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import fragmentShader from '../shaders/fragmentShader';

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
      <shaderMaterial uniforms = 
        {{
            time: { value: 0 }
        }}
        fragmentShader={fragmentShader}
        vertexShader={`
            varying vec2 vUv;

            void main(){
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `}
        />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
};

const WebGLCanvas = () => {
  return (
    <div className="circular-border">
        <div className="canvas-wrapper">
            <Canvas style={{ width: '640px', height: '480px' }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <RotatingCube />
            </Canvas>
        </div>
    </div>
  );
};

export default WebGLCanvas;
