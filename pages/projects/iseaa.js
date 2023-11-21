import Link from "next/link";
import {useRouter} from "next/router"
import Mouse from "../../public/components/Mouse"
import SubHead from "../../public/components/subheader"
import Head from "next/head";
import StarsCanvas from "../../public/components/StarsCanvas"
import Grain from "../../public/assets/textures/Grain.png"
import Image from "next/image";
import OrangeBall from "../../public/assets/textures/ORANGEBALL.png";

import { projects } from "../../public/scripts/Datas/projects";


function iseaa(){
    const router= useRouter()
   
 // Find the project with id: 1
 const project = projects.find((project) => project.id === 5);

  
    return(
        
        <div >
                    
        <Head>
            <title>Super Krishak</title>
        </Head>
            <Mouse></Mouse>
            <SubHead></SubHead>
            <StarsCanvas starColor="#AFFFE4" starSize={1.5} numStars={150}/>
            {/* <Image src={Grain} alt="Grain Texture" style={{width:'100%',height:'100%',position:'absolute',zIndex:3,mixBlendMode:'overlay',opacity:0.5,pointerEvents:'none'}}></Image> */}

            <main className="BGProjectsISEAA100" style={{height:'100vh',width:'100%'}}>
            <section className="projectHero position-relative PBm " >
                <div className="projectContainer d-flex flex-column MTfxl GAPxxl">
                    <Image src={OrangeBall} className="position-absolute" priority={false} style={{right:0,top:"-70px",zIndex:0,pointerEvents:'none',opacity:0.8}} alt="OrangeBall"></Image>
                    <div className="d-flex flex-row MTxxl justify-content-between"> 
                    <h1 className="text-uppercase projectTitle ">{project.title }</h1>
                    <span className="projectYear">{project.finishedYear}</span>
                    </div>
                    
            <h1 className="projectLeadingTitle text-uppercase" >{'\u00A0\u00A0\u00A0'}{project.LeadingTitle }</h1>
            <div className="d-flex justify-content-between projectRepsonibilityAndImage GAPl">
                <div className="d-flex flex-column GAPl projectResponsibility">
                    <p className="FONTNEXA ">My Responsibilities:</p>
                <ul className="d-flex flex-column GAPs"  style={{listStyle:'none',padding:0,margin:0}}>
                {project && project.responsibilities.map((responsibility, index) => (
                        <li className="projectResponsibilities FONTNEXA" key={index}>{responsibility}</li>
                    ))}
                    <li className="MTxl d-flex flex-wrap GAPs">
                       
                        {/* <Image src={project.LogoLink} width={172} height={88} alt="project Logo"></Image> */}
                    </li>
                     </ul></div>
                
                     <div className="projectHeroImage">
                     {/* <Image src={project.projectImageLink} alt="Project Image" width={800} height={400} /> */}
                     </div>
            </div>
            

            </div>
            
            </section>
            <section className="">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl">
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">
                    <span className="FONTMONUMENT SIZEF16">01</span>
                    <h3 className="FONTNEXA">Overview</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 childrenlassName="SIZEF12 w-50">
                    CHALLENGE
                    </h4>
                    <p className=" FONTNEXA SIZEF10">{project.projectChallenge}</p>
                </div>
                <div className="projectInfo d-flex GAPm">
                <h4 className="SIZEF12">
                        APPROACH
                </h4>
                    <p className=" FONTNEXA SIZEF10">{project.projectApproach}</p>                
                    </div>
                    </div>
            </section>
            <section className="MTfxl PBfxl">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl">
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">
                    <span className="FONTMONUMENT SIZEF16">02</span>
                    <h3 className="FONTNEXA">The new approach to web</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 childrenlassName="SIZEF12 w-50">
                    {project.projectVisionTitle}
                    </h4>
                    <p className=" FONTNEXA SIZEF10">{project.projectVision}</p>
                </div>
                
                    <div className="projectBanner" style={{height:'auto'}}>
                    {/* <Image src={project.projectBannerImage}
                    alt="Project Banner"
                    width={1000} // Set an appropriate width
                    height={465}
                    layout="responsive"></Image> */}
                    </div>
                    </div>
            </section>
            </main>
        
        
        
        </div>
    )
}



export default iseaa;