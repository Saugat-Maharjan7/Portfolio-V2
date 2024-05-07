import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from 'react-three-fiber';

export function Capital(props) {
  const group = useRef();
  const top = useRef();
  const bottom = useRef();
  const { size } = useThree();
  const [isMobileView, setIsMobileView] = useState(size.width < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { nodes, materials, animations } = useGLTF('/models/capital.glb');
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.rotation.z -= 0.002;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={isMobileView ? [1, 1.3, -2] : [3.5, 0, -2]}
      scale={isMobileView ?0.7:0.8}
      rotation={[4.75, 0.01, 0.55]}
    >
      <group name="Scene">
        <group name="Empty" position={[0, 0.001, 0]} />
        <mesh
          name="top"
          ref={top}
          castShadow
          geometry={nodes.top.geometry}
          position={[0.831, -0.056, 1.28]}
          rotation={[Math.PI / 2, 0, -0.262]}
        >
          <meshBasicMaterial wireframe />
        </mesh>
        <mesh
          name="bottom"
          ref={bottom}
          receiveShadow
          geometry={nodes.bottom.geometry}
          position={[-0.967, -0.056, -1.39]}
          rotation={[Math.PI / 2, 0, 2.88]}
        >
          <meshBasicMaterial wireframe />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/models/capital.glb');
