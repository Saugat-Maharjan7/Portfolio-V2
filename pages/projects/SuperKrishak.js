import Link from "next/link";
import {useRouter} from "next/router"
import Mouse from "../../public/components/Mouse"
import SubHead from "../../public/components/subheader"
import Head from "next/head";
import StarsCanvas from "../../public/components/StarsCanvas"
import Grain from "../../public/assets/textures/Grain.png"
import Image from "next/image";

import { projects } from "../../public/scripts/Datas/projects";


function SuperKrishak(){
   console.log(Grain)
    const router= useRouter()
   
 // Find the project with id: 1
 const project = projects.find((project) => project.id === 1);
  
    return(
        
        <div >
                    
        <Head>
            <title>Super Krishak</title>
        </Head>
            <Mouse></Mouse>
            <SubHead></SubHead>
            <StarsCanvas starColor="#AFFFE4" starSize={1.5} numStars={150}/>
            <main className="BGProjectsSuperKrishak100" style={{height:'100vh',width:'100%'}}>
                <Image src={Grain} alt="Grain Texture" style={{width:'100%',height:'100vh',position:'absolute',zIndex:3,mixBlendMode:'overlay',opacity:0.5,pointerEvents:'none'}}></Image>
            <section className="projectHero">
                <div className="projectContainer">
                    <div className="d-flex flex-row"> 
                    <h1 className="SIZEF16">{project.title }</h1>
                    </div>
                    
            <h1 className="projectLeadingTitle text-uppercase">{project.LeadingTitle }</h1></div>
            
            </section>
            </main>
        
        
        
        </div>
    )
}



export default SuperKrishak;