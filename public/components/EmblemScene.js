import Script from 'next/script'
import { Canvas, useLoader  } from '@react-three/fiber';
import { Suspense } from 'react';


import { Capital } from './Capital';

import gsap from 'gsap';
import { easeIn, motion as m } from "framer-motion"

import {OrbitControls,PerspectiveCamera, useTexture, Stars  } from "@react-three/drei"
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette,SSAO, SMAA, Selection, Outline } from '@react-three/postprocessing';

import React, { useRef,useState  } from "react";
import { useFrame,useThree } from '@react-three/fiber';
import { DoubleSide, MeshStandardMaterial, RepeatWrapping } from 'three';

import {useEffect} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Three(){
    const cameraref=useRef()

    useEffect(()=>{
       
    })

    useFrame(() => {

      
    });

    
    return(

        <>
            <EffectComposer multisampling={5} autoClear={false} >
              {/* <Bloom mipMap intensity={70} luminanceThreshold={0} luminanceSmoothing={0.1}      mipmapBlur={true} /> */}
              <Noise opacity={0.1} />

              </EffectComposer>
        <PerspectiveCamera ref={cameraref} makeDefault position={[0,0,8]}/>
    <OrbitControls/>
    <pointLight castShadow re position={[-8,15,0]} intensity={0.4}/>
    <pointLight castShadow position={[-20,10,-10]} color={'#FF6B00'} intensity={0.5}/>
    <pointLight castShadow position={[15,5,2]} color={'#FF6B00'} intensity={0.35}/>
    <pointLight castShadow position={[6,0,2]} color={'#FF00DD'} intensity={0.5}/>


       <Capital/>


   
        </>
    )
}

function EmblemScene(){

  
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
        
        shadows
         style={{
          
          position:"fixed",
          zIndex:0
        }}
        id="threed-container" className="webgl"
        >
                  {/* <color args={['#000000']} attach="background" alpha={1} /> */}

        <Suspense>
                
                <Three/>
        </Suspense>
        
        </Canvas>
        <Script>{

            
            
            }</Script>
        </m.div>
    )
}

export default EmblemScene;