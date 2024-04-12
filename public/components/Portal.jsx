
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { Canvas,extend } from 'react-three-fiber'
import { PerspectiveCamera,OrbitControls,shaderMaterial } from '@react-three/drei'
import { Environment,  } from '@react-three/drei'
import { SphereBufferGeometry, MeshStandardMaterial } from 'three';
import portalVertexShader from "../shaders/vertex.glsl"
import portalFragmentShader from "../shaders/fragment.glsl"
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
// import glsl from 'vite-plugin-glsl'



export function Portal(props) {
  const { nodes, materials } = useGLTF('../models/portal.glb')
  
  const meshRef = useRef();

  

  return (
    <div className='portal'>
    <Canvas 
    shadows
    gl={{ alpha: true }}
    dpr={[1, 1.5]}
>
  <OrbitControls/>
  <Environment background={false} files={'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/potsdamer-platz/potsdamer_platz_1k.hdr'} />

      <PerspectiveCamera makeDefault position={[0,0,5]}/>
      <pointLight color="white" intesity={100} position={[0,3,5]}/>
    

      <group  dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials.black} />
        <mesh ref={meshRef} rotation={[0,0,3.15]} geometry={nodes.Circle_2.geometry} >
          <shaderMaterial
          attach="material"
          // uniforms={{ uTime: { value: 0.0 } }}
          vertexShader={portalVertexShader}
          fragmentShader={portalFragmentShader}/>
        {/* <colorShiftMaterial color="red" /> */}

        </mesh>
     
     
      </group>
      
      </group>
    </Canvas></div>
    
    
  )
}

useGLTF.preload('../models/portal.glb')
