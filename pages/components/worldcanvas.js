import Script from 'next/script'
import { Canvas } from '@react-three/fiber';
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react';
// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import * as dat from 'dat.gui';
import gsap from 'gsap';

import {OrbitControls,PerspectiveCamera, useTexture} from "@react-three/drei"
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, RepeatWrapping } from 'three';


// import { useRef, useFrame } from 'react'
// import { Color, PointLight } from 'react-three-fiber'
// import * as dat from 'dat.gui'

// const App = () => {
//   const pointLightRef = useRef()

//   // Use the useFrame hook to update the position of the point light
//   // each frame based on the values set in dat.gui
//   useFrame(() => {
//     pointLightRef.current.position.set(
//       pointLightRef.current.position.x,
//       pointLightRef.current.position.y,
//       pointLightRef.current.position.z
//     )
//   })

//   // Create the point light
//   const pointLight = <PointLight ref={pointLightRef} />

//   // Set the color of the point light to white
//   pointLight.color = new Color(0xffffff)

//   // Create a new dat.gui folder to control the position of the point light
//   const gui = new dat.GUI()
//   const folder = gui.addFolder('Point Light Position')
//   folder.add(pointLightRef.current.position, 'x', -10, 10)
//   folder.add(pointLightRef.current.position, 'y', -10, 10)
//   folder.add(pointLightRef.current.position, 'z', -10, 10)

//   return pointLight
// }



// console.log(normal,height)



function Three(){

    const sphereRef = useRef();
    const normal = useTexture("./assets/textures/Normal.png")
    normal.wrapS = normal.wrapT = RepeatWrapping


    const height = useTexture("./assets/textures/Height.jpg")
    height.wrapS = height.wrapT = RepeatWrapping

    // Rotate the sphere in the y-axis on each frame
    useFrame(() => {
      sphereRef.current.rotation.y += 0.001;
    //   sphereRef.current.rotation.z += 0.5;

    });

    const material = new MeshStandardMaterial({ color: (0x1a1a1a),  normalMap: normal,heightTextureMap:height})
    material.normalMap.repeat.set(8, 8)
    material.normalMap.repeat.set(8, 8)
    material.metalness = 2



    return(
        <>


        <PerspectiveCamera makeDefault position={[0,1,8]}/>
        <OrbitControls></OrbitControls>
       <pointLight position={[2000, 900, -500]} intensity= {(100)} color={(0xFB722E)}/>
       <pointLight position={[-2000, 900, -500]} intensity= {(100)} color={(0xC25FFD)}/>

       <pointLight position={[10, 7, 64]} />



    <mesh ref={sphereRef} material={material}>


      <sphereGeometry args={[2,64,100]}/>
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