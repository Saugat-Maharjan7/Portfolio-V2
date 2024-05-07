'use client'
import Link from "next/link"
import Header from "../public/components/header"
import Toggle from "../public/components/togglemenu"
import ThreeD  from "../public/components/ThreeD"
import Footer from "../public/components/Footer"
import Script from 'next/script'
import {use, useEffect,useRef,useState } from 'react'
import World from "../public/components/worldcanvas"
import Mouse from "../public/components/Mouse"
import Head from "next/head"
import { easeIn, motion as m } from "framer-motion"
import Sidenavigation from "../public/components/side-navigation";
import {projects} from '../public/scripts/Datas/projects'; //projects database
import BGERASER from "../public/components/BgEraserSection";
import React from 'react';
import Button from "../public/components/Button";
import Spline from '@splinetool/react-spline';
// import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Source } from "three"
import EmblemScene from "../public/components/EmblemScene"


export default function Home() {

    //button icons
    // const lenis = useLenis(({ scroll }) => {
    //   // called every scroll
    // })
  
    const mainRef = useRef(null);
    // useLenis(mainRef);

    let exploreref=useRef()
    const landingTitle="CRAFTING TOMORROW'S INNOVATION."
    const [isToggled, setToggled] = useState(false);
    const [time, setTime] = useState('');

    const mouseTargetElements = [
      { targetClass: "p-right", hoverClass: "mouse-cursor-case" },
      { targetClass: "designs-grid-container", hoverClass: "mouse-cursor-brush",pressClass: "mouse-cursor-brushed" },
      { targetClass: "particles-sphere", hoverClass: "mouse-cursor-particles" },
      // Add more objects for additional target elements and hover classes
    ];

    const titleLetters = landingTitle.split('');
   
    useEffect(() => {
      const elements = document.querySelectorAll('.spline-watermark');
      elements.forEach(element => {
        element.style.display = 'none';
      });
    }, []); 

    //for smooth scroll
    useEffect(() => {

      

      const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const sections = document.querySelectorAll('section');
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50; // Adjust offset as needed
          const sectionHeight = section.clientHeight;
  
          if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            const name = section.getAttribute('name');
            window.history.replaceState(null, null, `#${name}`);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  //for time
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const torontoTime = date.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' });
      setTime(torontoTime); 
    }, 1000);

    // timezone has been changed please add this
  
    return () => clearInterval(interval);
  }, []);
  

  //side-bar toggle

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
    const [checked, setChecked] = useState(false);

  return (
    
      
      <m.div>
        <Head>
        <meta property="og:image" content="/assets/websitebanner.jpg" />
        <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Shirish - The Design World</title>

        </Head>
      
        

        
        <Toggle></Toggle>
        <Mouse 
        mouseTargetElements={mouseTargetElements}
        />


      {/* Mobile Navigation */}
      <Sidenavigation isSidebarOpen={isSidebarOpen}></Sidenavigation>

            
      {/* <World/> */}
    <EmblemScene/>
      

        <main ref={mainRef} className={checked ? 'main-inactive' : ''}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}></Header>

          <div className="hero-wrapper position-relative">           
            <section className="w-100 hero-container" style={{top: 0}} >
              <div className="container position-relative">
                <m.div 
                 initial={{
                  y:-100,
                  opacity:0
                }}
                
                animate={{
                  y:0,
                  opacity:1
                }}
                transition={{
                  duration:1.5,

                 
                }}
                className="gradient-shade w-100" />
                <div className="hero border-l-r-b d-flex flex-column">
                  <img className="blur_purple_1" src="/assets/blurpurple.png" alt="purple light" />
                  <img className="sun_light" src="/assets/sun light.png" alt="sun light" />
                <div
                >
                  {/* <iframe className="particles-sphere" style={{position:'absolute',
                  right:'0%',
                  bottom:'0%',
                  width: '100%', // Set initial width to 100%
                  height: '100%', // Set initial height to 100%
                  mixBlendMode:'difference',
                  pointerEvents:"auto",
                  
                
                }} 

                  src="https://my.spline.design/particlescopy-0ecfa97a67f6faf0c6a15881cc56d744/" 

                  // width="1200" height="1000" 

                  frameBorder="0" 
                  allowTransparency="true" >
                  </iframe> */}
                 
                  {/* <div style={{width:"200px",height:'50px',background:"#161515",position:'absolute',bottom:'2%',right:"20px",zIndex:'0'}}></div> */}
                  </div>

                  <div className="hero-title d-flex flex-column">
                    <span style={{fontFamily:"Monument Extended Bold", letterSpacing:0.8}}>SHIRISH SHAKYA </span>
                   
                    <h1 className="FONTMONUMENT" >
                      <div>
                            {titleLetters.map((letter, index) => (
                            <m.span
                              key={index}
                              initial={{ y: -100, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                              
                            >
                              {letter}
                            </m.span>
                          ))}
                          </div>
                    </h1>
                      <p>Designer from Greater Toronto Area</p>
                      
                      
                  </div>
                  <div className="profile_info_top d-flex w-100" style={{position:'relative',zIndex:'1'}}>
                    <div className="social_links d-flex flex-column">
                      <span>shirish.shakya5@gmail.com</span>
                      <div className="time">{time} <span>Local Time</span></div>
                      <ul style={{textDecoration:'none',listStyle:'none'}} className="contact d-flex flex-row GAPm PADDING0 " >
                        <li ><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.linkedin.com/in/shirish-shakya-0bb39a293">Linkedin</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://drive.google.com/file/d/1YVcCpCQQ6g_sIYKn2--uT22rAtxjbcNp/view?usp=sharing">Resume</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="digital-products" className="w-100">
            <div className="container position-relative" id="products-container">
              <div style={{borderTop:"1px solid white"}} className="border-l-r-b d-flex flex-row container-title">
               
                <div className=" container-header d-flex align-items-center" >
                  <h2 className="secton-header-h2">FEATURED PROJECTS </h2>

                  
                </div>
              </div>
            </div>
            <div className="container d-flex flex-row " style={{justifyContent: 'center'}}>
              
              {/* projects container */}
              <ul className="border-l-r-b project-contents">

              {projects.filter(project => project.featured === true).map((project, index, array) => (

                <React.Fragment key={project.id}>
                  <li  className="project d-flex" id={project.title} >
                    <div className="p-left d-flex flex-column">
                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          {/* Mapping responsibilities */}
                          
                          {project.responsibilities.map((responsibility, resIndex) => (
              <span key={resIndex} className="MRm">{responsibility}</span>
            ))}                          
                        </span>
                        <h3 className="allCaps">{project.title}</h3>
                        <p className="project-details">{project.projectBrief}</p>
                      </div>
                      <Link  href={project.link}>
                      <Button size="medium" 
                      customButtonType="outline" 
                      label="view case study" 
                      rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      
                      } />
                      </Link>
                    </div>
                    <Link href={project.link} className="p-right d-flex align-items-center justify-content-center position-relative">
                      <div className="position-absolute sub-image">
                        <img src={project.projectMascotImageLink} alt="Project Mascot" />
                      </div>
                      <img className="rightimg" src={project.featuredImageLink} alt="featured-image" />
                    </Link>
                    
                  </li>
        {index !== array.length - 1 && ( // Add a div except for the last project
      <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />
    )}
        </React.Fragment>
      ))}
                
                
              </ul>
              {/* end of project container */}
            </div>
          </section> 
          <BGERASER/>   
         <ThreeD/>
         <Footer/>
        </main>
       
        <Script type="module" src="/script.js"></Script>
        </m.div>           
      
   
  )
}


// export async function getServerSideProps(context){
//   const res = await fetch(`https://eoa1wcoa1epng8i.m.pipedream.net`);
//   const cmsdata = await res.json();
  
//   return {
//     props: {
//       cmsdata 
//     }
//   };
// }