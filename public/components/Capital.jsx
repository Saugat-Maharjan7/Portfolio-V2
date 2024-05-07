import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

export function Capital(props) {
  const group = useRef();
  const top = useRef();
  const bottom = useRef();

  const { nodes, materials, animations } = useGLTF('/models/capital.glb');
  const { actions } = useAnimations(animations, group);

  
  useFrame(() => {
    // Use the Sine helper function to create an oscillating motion
    // top.current.position.z =  -Math.sin((performance.now() / 10000)) *0.5
    // bottom.current.position.z =  Math.sin((performance.now() / 10000)) *0.5

    group.current.rotation.z -=0.002

  });

  return (
    <group ref={group} {...props} dispose={null} position={[3.5, 0.5, -1]} rotation={[4.75, 0.01, 0.55]}>
      <group name="Scene">
        <group name="Empty" position={[0, 0.001, 0]} />
        <mesh name="top" ref={top} castShadow geometry={nodes.top.geometry} material={materials['3DWallPanelsBlack']} position={[0.831, -0.056, 1.28]} rotation={[Math.PI / 2, 0, -0.262]} />
        <mesh name="bottom" ref={bottom}  receiveShadow geometry={nodes.bottom.geometry} material={materials['3DWallPanelsBlack']} position={[-0.967, -0.056, -1.39]} rotation={[Math.PI / 2, 0, 2.88]} />
        {/* <pointLight castShadow position={[-1, -0.5, 0]} color={'#FF6B00'} intensity={1}/> */}

        <mesh name="Sphere" castShadow receiveShadow geometry={nodes.Sphere.geometry} position={[-0.901, -0.625, -0.389]} scale={.13} >
        <meshStandardMaterial emissive="#FF714B" emissiveIntensity={2} toneMapped={true} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/models/capital.glb');
