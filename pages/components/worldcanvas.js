import Script from 'next/script'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import * as dat from 'dat.gui';
import gsap from 'gsap';
import normal from "../../public/assets/textures/Normal.png"
import height from "../../public/assets/textures/Height.jpg"
import {OrbitControls,PerspectiveCamera} from "@react-three/drei"


function Three(){
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,5,5]}/>
        <OrbitControls></OrbitControls>
       <pointLight position={[10, 7, 32]} />
       {/* <ambientLight args={["#ffffff",1]}></ambientLight> */}
    <mesh>
      <sphereGeometry args={[2,64,100]}/>
      <meshPhongMaterial color="#1f1f1f" />
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