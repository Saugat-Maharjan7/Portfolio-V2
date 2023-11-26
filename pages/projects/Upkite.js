import Link from "next/link";
import Mouse from "../../public/components/Mouse"
import SubHead from "../../public/components/subheader"
import Head from "next/head";
import StarsCanvas from "../../public/components/StarsCanvas"
import Image from "next/image";
import OrangeBall from "../../public/assets/textures/ORANGEBALL.png";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from "../../public/scripts/Datas/projects";
import ImageGravityCanvas from "../../public/components/ImageGravityCanvas"
import SubFooter from '../../public/components/subfooter';



function Upkite(){


     // Find the project with id: 1
    const project = projects.find((project) => project.id === 2);
    const titleLetters = project.LeadingTitle.split('');

    const mouseTargetElements = [
      { targetClass: "ImageGravityCanvas", hoverClass: "mouse-cursor-grab", pressClass: "mouse-cursor-grabbed" // CSS class for press effect
    },
      // Add more objects for additional target elements and hover classes
    ];

    const numSections = 5; // Define the number of sections you want to handle

    const lineControls = Array.from({ length: numSections }, () => useAnimation());
    const linerefs = Array.from({ length: numSections }, () => useInView({ threshold: 0.8 }));
    const lineInViews = linerefs.map(([, inView]) => inView);

    //ParallaxEffect

    useEffect(() => {
      const parallaxEffect = (event) => {
        const parallaxImages = document.querySelectorAll('.parallax-image');
        const deltaY = event.deltaY;
  
        parallaxImages.forEach((image) => {
          const speed = parseFloat(image.getAttribute('data-speed')) || 0.4; // Default speed if not specified
          image.style.transform = `translateY(${deltaY * speed}px)`;
        });
      };
  
      window.addEventListener('wheel', parallaxEffect);
  
      return () => {
        window.removeEventListener('wheel', parallaxEffect);
      };
    }, []);



    // Controls for text opacity animations
    const textControls = Array.from({ length: numSections }, () => useAnimation());
    const textrefs = Array.from({ length: numSections }, () => useRef());

  // Extract the first three images for left and the next three for right
  const leftImages1 = project.projectScreenShots.slice(0, 3);
  const rightImages1 = project.projectScreenShots.slice(3, 6);

   // Extract the first three images for left and the next three for right
   const leftImages2 = project.projectScreenShots.slice(6, 9);
   const rightImages2 = project.projectScreenShots.slice(9, 12);
    
    useEffect(() => {
        lineInViews.forEach((inView, index) => {
          if (inView) {
            lineControls[index].start({ width: '100%', transition: { duration: 1, ease: 'easeIn' } });
            textControls[index].start({ opacity: 1, transition: { duration: 1, ease: 'easeIn' } });
          } else {
            lineControls[index].start({ width: 0, transition: { duration: 1, ease: 'easeIn' } });
            textControls[index].start({ opacity: 0.5, transition: { duration: 1, ease: 'easeIn' } });
          }
        });
      }, [lineControls, textControls, lineInViews]);

     
   

    return(
        
        <div >
                    
        <Head>
            <title>Upkite</title>
        </Head>
            <Mouse mouseTargetElements={mouseTargetElements}></Mouse>
            <SubHead></SubHead>
            <StarsCanvas starColor="#AFFFE4" starSize={1.5} numStars={150}/>
            {/* <Image src={Grain} alt="Grain Texture" style={{width:'100%',height:'100%',position:'absolute',zIndex:3,mixBlendMode:'overlay',opacity:0.5,pointerEvents:'none'}}></Image> */}

            <main className="" style={{height:'100vh',width:'100%',backgroundColor:project.color}}>
            <section className="projectHero position-relative PBm " >
                <div className="projectContainer d-flex flex-column MTfxl GAPxxl">
                    <Image src={OrangeBall} className="position-absolute" priority={false} style={{right:0,top:"-100px",zIndex:0,pointerEvents:'none',opacity:0.8}} alt="OrangeBall"></Image>
                    <div className="d-flex flex-row MTxxl justify-content-between"> 
                    <h1 className="text-uppercase projectTitle ">{project.title }</h1>
                    <span className="projectYear">{project.finishedYear}</span>
                    </div>
                    
            <h1 className="projectLeadingTitle text-uppercase" >
                {titleLetters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
          
        >
          {letter}
        </motion.span>
      ))}
                </h1>
            <div className="d-flex justify-content-between projectRepsonibilityAndImage GAPl">
                <div className="d-flex flex-column GAPl projectResponsibility">
                    <p className="FONTNEXA ">My Responsibilities:</p>
                <ul className="d-flex flex-column GAPs "  style={{listStyle:'none',padding:0,margin:0}}>
                {project && project.responsibilities.map((responsibility, index) => (
                        <li className="projectResponsibilities FONTNEXA" key={index}>{responsibility}</li>
                    ))}
                    <li className="MTxl d-flex flex-wrap GAPs">
                        <Image src={project.LogoLink} width={172} height={88} alt="project Logo"></Image>
                    </li>
                     </ul></div>
                
                     <div className="projectHeroImage">
                     <Image src={project.projectMascotImageLink} alt="Project Image" width={800} height={400} />
                     </div>
            </div>
            

            </div>
            
            </section>
            <SubFooter/>

            </main>
        
        
        </div>
    )
}



export default Upkite;