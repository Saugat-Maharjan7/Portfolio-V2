// import {angletoRadians} from "../uti"
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

export default Three;