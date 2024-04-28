
import React, { useEffect, useRef, useState } from 'react'
import portalVertexShader from "../shaders/vertex.glsl"
import portalFragmentShader from "../shaders/fragment.glsl"

import * as THREE from 'three';
import { useFrame, extend } from '@react-three/fiber'
import { Plane } from '@react-three/drei';
import { shaderMaterial, Sparkles, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'
import { TextureLoader, SphereGeometry } from 'three';

const SphereShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uFrequency:{value: new THREE.Vector2(5,20)},


  },
  vertexShader:portalVertexShader
// fragmentShader:portalFragmentShader
};

// Update the uniforms when necessary


export default function Flag() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const materialRef = useRef();
    const flagTexture = new TextureLoader().load('./ca-flag.jpg');

   
  
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = elapsedTime;
      
      }
    });
  return (
    <>
      {/* <Plane args={[1, 1,32, 32]} scale={2} rotation={[1.5,0,0]}>
      <shaderMaterial
      attach="material" 
      
       ref={materialRef}
        side={THREE.DoubleSide}
       args={[SphereShaderMaterial]}
       map={flagTexture}
       />
      </Plane> */}
      <mesh rotation={[2,2,1]}>
      <sphereGeometry args={[1, 120, 120]} />
      <shaderMaterial
      wireframe
      attach="material" 
       ref={materialRef}
        side={THREE.DoubleSide}
       args={[SphereShaderMaterial]}
       />    </mesh>
    </>
  )
}
