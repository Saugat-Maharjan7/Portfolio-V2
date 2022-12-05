import Script from 'next/script'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from "./three/three"
// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import * as dat from 'dat.gui';
import gsap from 'gsap';
import normal from "../../public/assets/textures/Normal.png"
import height from "../../public/assets/textures/Height.jpg"


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