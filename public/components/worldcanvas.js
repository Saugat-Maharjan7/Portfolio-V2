import Script from 'next/script'
import { Canvas, useLoader  } from '@react-three/fiber';
import { Suspense } from 'react';
import { Vector3 } from 'three';


import { EffectComposer, Bloom, Noise } from 'postprocessing';


import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)

// import { TweenMax } from 'gsap/gsap-core';
import { easeIn, motion as m } from "framer-motion"

import {OrbitControls,PerspectiveCamera, useTexture, Stars  } from "@react-three/drei"

import React, { useRef,useState  } from "react";
import { useFrame,useThree } from '@react-three/fiber';
import { DoubleSide, MeshStandardMaterial, RepeatWrapping } from 'three';

import {useEffect} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Three(){
    
      const [targetMesh, setTargetUfo] = useState(null);
      const cameraPosition = new Vector3();
      const cameraLookAt = new Vector3();
    const projects = useTexture("../me.png");

    let starref=useRef()

    let mousesathover=useRef(false)
    const ufo = useLoader(GLTFLoader, '/ufo.glb');

    let uforef=useRef();
    const [isHovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

    const scrollable=document.querySelector('main')

    const cameraref=useRef();
    const sphereRef = useRef();
    const [rotation, setRotation] = useState([0, 0, 0]);
    const pointLightRef = useRef()

    const normal = useTexture("./assets/textures/Normal.png")
    normal.wrapS = normal.wrapT = RepeatWrapping


    const height = useTexture("./assets/textures/Height.jpg")
    height.wrapS = height.wrapT = RepeatWrapping
    const { camera } = useThree();


    const material = new MeshStandardMaterial({ color: (0x1a1a1a),  normalMap: normal,heightTextureMap:height})



    material.normalMap.repeat.set(8, 8)
    material.normalMap.repeat.set(8, 8)
    material.metalness = 0.463;
    material.roughness=0.7;

    useEffect(()=>{
        scrollable.addEventListener('scroll',(e)=>{
            let t=scrollable.scrollTop;
        
            let o=1;
            sphereRef.current.position.z=t*0.8;
            sphereRef.current.rotation.z +=t*10;
            starref.current.position.z=t*0.5
            if (t>0){
                o=0*t
            }
            if(t=0){
                o=1+t;
            }
    
            //lag during scrolling
            sphereRef.current.rotation.z+=0.11;
            sphereRef.current.visible=o;
            material.opacity=o

         
        })

    })

    useFrame(() => {

        starref.current.rotation.y+=0.0002

        if (uforef.current) {
            // Use a sine wave to move the model up and down
            const time = performance.now() / 1000;
            uforef.current.position.y = Math.sin(time) * 0.1+2;
          }

          //this is the hover on ufo        
        sphereRef.current.rotation.y += 0.001;
        pointLightRef.current.position.set(
        pointLightRef.current.position.x,
        pointLightRef.current.position.y,
        pointLightRef.current.position.z,)

        camera.lookAt(sphereRef.current.position);

        if (uforef.current) {
            const scale = isHovered ? 0.8 : 0.7;
            uforef.current.scale.x = uforef.current.scale.y = uforef.current.scale.z += (scale - uforef.current.scale.x) * 0.05;
          }

          if (targetMesh) {
            const { x, y, z } = targetMesh.position;
            camera.lookAt(uforef.current.position);
          }
    });

    
    return(

        <>
        <PerspectiveCamera ref={cameraref} makeDefault position={[0,3,8]}/>
       <pointLight ref={pointLightRef}  position={[1000, 800, -900]} intensity= {(10)} color={(0xFB722E)}/>
       <pointLight   position={[-2000, 900, -900]} intensity= {(10)} color={(0xC25FFD)}/>
        <OrbitControls></OrbitControls>
       
{/* ufo */}
       {/* <primitive ref={uforef} position={[6,1,1]} 
       rotation={[0.1,-10,0]}
       onClick={() => setTargetUfo(uforef.current)}
       onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
       scale={[1,1,1]}


       object={ufo.scene} /> */}
       

        {/* this is the sphere world */}

    <mesh ref={sphereRef} material={material}>
      <sphereGeometry args={[2.2,120,100]}/>
    </mesh>
    
        <Stars ref={starref} factor={0.5} />
        </>
    )
}

function World(){

  
    return(
        <m.div
        initial={{
            
            opacity:0
          }}
          
          animate={{
            
            opacity:1
          }}
          transition={{
            duration:2,

           
          }}>
            

        <Canvas 
         style={{
          // background: 'url(../space.jpg) center no-repeat',
          // backgroundSize: 'cover',
          position:"fixed",
          zIndex:1
        }}
        id="threed-container" className="webgl"
        >
            <Suspense>
                
                <Three/>
        </Suspense>
        
        </Canvas>
        <Script>{

            
            
            }</Script>
        </m.div>
    )
}

export default World;