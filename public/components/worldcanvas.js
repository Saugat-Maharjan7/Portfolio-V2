import Script from 'next/script'
import { Canvas } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)

// import { TweenMax } from 'gsap/gsap-core';

import {OrbitControls,PerspectiveCamera, useTexture, Stars  } from "@react-three/drei"

import React, { useRef,useState  } from "react";
import { useFrame,useThree } from '@react-three/fiber';
import { MeshStandardMaterial, RepeatWrapping } from 'three';
// import {Starfi}

import {useEffect} from 'react'
// import { useMouse } from "react-use";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
// import rocketmodel from "../../public/assets/gltf/satellite.glb"

function Three(){


    let starref=useRef()

    let mousesathover=useRef(false)
    const satellite = useLoader(GLTFLoader, '/satellite.glb');

    let satelliteref=useRef()

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
        
            let o=1
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

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: scrollable,
        //       start: 'top 50%',
        //       end: 'bottom 50%',
        //       scrub: true
        //     }
        //   })
      
        //   tl.to(sphereRef.current.position, {
        //     y: 5,
        //     duration: 1
        //   })
    })

    useFrame(() => {

        starref.current.rotation.y+=0.0002

        if (satelliteref.current) {
            // Use a sine wave to move the model up and down
            const time = performance.now() / 1000;
            satelliteref.current.position.y = Math.sin(time) * 0.1+2;
          }

          //this is the hover on satellite        
        sphereRef.current.rotation.y += 0.001;
        pointLightRef.current.position.set(
        pointLightRef.current.position.x,
        pointLightRef.current.position.y,
        pointLightRef.current.position.z,)

        camera.lookAt(sphereRef.current.position);
    });

    return(

        <>
        <PerspectiveCamera ref={cameraref} makeDefault position={[0,1,8]}/>
       <pointLight ref={pointLightRef}  position={[1000, 800, -900]} intensity= {(10)} color={(0xFB722E)}/>
       <pointLight   position={[-2000, 900, -900]} intensity= {(10)} color={(0xC25FFD)}/>
        <OrbitControls></OrbitControls>
       

       <primitive ref={satelliteref} position={[2,2.5,2]} rotation={[19,-500,-10]} scale={[0.15,0.15,0.15]} object={satellite.scene} />

        {/* this is the sphere world */}
    <mesh ref={sphereRef} material={material}>
      <sphereGeometry args={[2.2,120,100]}/>
    </mesh>
        <Stars ref={starref} />
        </>
    )
}

function World(){

  
    return(
        <>
        <Canvas  id="threed-container" className="webgl" style={{position:"fixed",zIndex:1}}>
            <Suspense>
                <Three/>
        </Suspense>
        </Canvas>
        <Script>{

            
            
            }</Script>
        </>
    )
}

export default World;