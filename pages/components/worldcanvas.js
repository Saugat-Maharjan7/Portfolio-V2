import Script from 'next/script'
import { Canvas } from '@react-three/fiber';
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import {OrbitControls,PerspectiveCamera, useTexture} from "@react-three/drei"

import React, { useRef,useState  } from "react";
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, RepeatWrapping } from 'three';
import {useEffect} from 'react'





function Three(){
    
    const scrollable=document.querySelector('main')


    const sphereRef = useRef();
    const [rotation, setRotation] = useState([0, 0, 0]);
    const pointLightRef = useRef()

    const normal = useTexture("./assets/textures/Normal.png")
    normal.wrapS = normal.wrapT = RepeatWrapping


    const height = useTexture("./assets/textures/Height.jpg")
    height.wrapS = height.wrapT = RepeatWrapping


    useEffect(() => {
     
  
        scrollable.addEventListener('scroll',()=>{
        console.log(scrollable.scrollTop)})
    });

    // Rotate the sphere in the y-axis on each frame
    useFrame(() => {

        sphereRef.current.rotation.y += 0.001;
        pointLightRef.current.position.set(
        pointLightRef.current.position.x,
        pointLightRef.current.position.y,
        pointLightRef.current.position.z,)

        function onscroll(event){
            sphereRef.current.rotation.z+=0.11

        }
        scrollable.addEventListener('scroll', onscroll);
    });

    const material = new MeshStandardMaterial({ color: (0x1a1a1a),  normalMap: normal,heightTextureMap:height})
    material.normalMap.repeat.set(8, 8)
    material.normalMap.repeat.set(8, 8)
    material.metalness = 0.463;
    material.roughness=0.7;


    return(
        <>


        <PerspectiveCamera makeDefault position={[0,1,8]}/>
        <OrbitControls></OrbitControls>
       <pointLight ref={pointLightRef}  position={[1000, 800, -900]} intensity= {(10)} color={(0xFB722E)}/>
       <pointLight   position={[-2000, 900, -900]} intensity= {(10)} color={(0xC25FFD)}/>

       {/* <pointLight position={[10, 7, 64]} /> */}



    <mesh ref={sphereRef} material={material}>
      <sphereGeometry args={[2.2,120,100]}/>
    </mesh>
        </>
    )
}

function World(){

  
    return(
        <>
        <Canvas id="threed-container" className="webgl" style={{position:"fixed"}}>
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