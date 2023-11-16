import Link from "next/link";
import {useRouter} from "next/router"
import Mouse from "../../public/components/Mouse"
import SubHead from "../../public/components/subheader"
import Head from "next/head";
import StarsCanvas from "../../public/components/StarsCanvas"
import Grain from "../../public/assets/textures/Grain.png"
import Image from "next/image";
import OrangeBall from "../../public/assets/textures/ORANGEBALL.png";
import PJIMG from "../../public/assets/projects/trctor.png";

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
            <Image src={Grain} alt="Grain Texture" style={{width:'100%',height:'100%',position:'absolute',zIndex:3,mixBlendMode:'overlay',opacity:0.5,pointerEvents:'none'}}></Image>

            <main className="BGProjectsSuperKrishak100" style={{height:'100vh',width:'100%'}}>
            <section className="projectHero position-relative PBl " >
                <div className="projectContainer d-flex flex-column MTfxl GAPxxl">
                    <Image src={OrangeBall} className="position-absolute" style={{right:0,top:"-70px",zIndex:0,pointerEvents:'none',opacity:0.8}} alt="OrangeBall"></Image>
                    <div className="d-flex flex-row MTxxl justify-content-between"> 
                    <h1 className="text-uppercase projectTitle ">{project.title }</h1>
                    <span className="projectYear">{project.finishedYear}</span>
                    </div>
                    
            <h1 className="projectLeadingTitle text-uppercase" >{'\u00A0\u00A0\u00A0\u00A0'}{project.LeadingTitle }</h1>
            <div className="d-flex justify-content-between projectRepsonibilityAndImage GAPl">
                <div className="d-flex flex-column GAPl projectResponsibility">
                    <p className="FONTNEXA ">My Responsibilities:</p>
                <ul className="d-flex flex-column GAPs"  style={{listStyle:'none',padding:0,margin:0}}>
                {project && project.responsibilities.map((responsibility, index) => (
                        <li className="projectResponsibilities FONTNEXA" key={index}>{responsibility}</li>
                    ))}
                     </ul></div>
                
                     <div className="projectHeroImage">
                        <Image src={PJIMG}  alt="projectIMG"></Image>
                     </div>
            </div>
            </div>
            
            </section>
            <section className="BGBrandBlack500" style={{height:'500px'}}></section>
            </main>
        
        
        
        </div>
    )
}



export default SuperKrishak;