
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
import { Spring } from "@react-spring/core"
import styles from '../styles/Custom_pages/custom-components/ToggleSwitch.module.css';
import Sidenavigation from "../public/components/side-navigation";
import Typewriter from 'typewriter-effect';
import {projects} from '../public/scripts/Datas/projects'; //projects database
import BGERASER from "../public/components/BgEraserSection";
import React from 'react';




export default function Home() {


  
 
    let exploreref=useRef()
    const [isToggled, setToggled] = useState(false);
    const [time, setTime] = useState('');

    const mouseTargetElements = [
      { targetClass: "p-right", hoverClass: "mouse-cursor-case" },
      { targetClass: "designs-grid-container", hoverClass: "mouse-cursor-brush",pressClass: "mouse-cursor-brushed" },
      // Add more objects for additional target elements and hover classes
    ];
    

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
      const localTime = date.toLocaleTimeString();
      setTime(localTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //side-bar toggle

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

    //for scrolling of the button
    // useEffect(()=>{
    //   let scrollable=document.querySelector('main')
    //   let explore=document.querySelector('.explore-world')
      
    //   scrollable.addEventListener('scroll',(e)=>{
    //     let t=scrollable.scrollTop;
    //     if (t>0){
    //       explore.style.display="none"

    //     }
    //   if(t<=0){
    //     explore.style.display="block"
       
    //   }
        
    //   })
    // })
    const [checked, setChecked] = useState(false);

  return (
    
      
      <m.div>
        <Head>
        <meta property="og:image" content="https://scontent.xx.fbcdn.net/v/t1.15752-9/313273686_827503425189555_3207342809800637848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mtft8E-ZwkUAX9C4eAk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHQ8fYnEQ5DaG4H5No7212K8qluiamCzyTikBCNaWZ0Q&oe=6383DEDB" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Shirish - The Design World</title>

        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">

        </Script>

        <World></World>
        
        <Toggle></Toggle>
        <Mouse 
        mouseTargetElements={mouseTargetElements}
        // targetClass="p-right" hoverClass="mouse-cursor-case" 
        />


        {/* switch button */}

        {/* <div  ref={exploreref} className={`${styles.toggleWrapper} explore-world` } onClick={()=>setChecked(!checked)}>
        <div
          className={`${styles.toggleSwitch} ${checked ? styles.checked : ''} ${!checked ? styles.unchecked:''}`}
        />
      </div> */}

      {/* Mobile Navigation */}
      <Sidenavigation isSidebarOpen={isSidebarOpen}></Sidenavigation>


        {/* <World/> */}
        <main className={checked ? 'main-inactive' : ''}>
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
                  <img className="blur_purple_1" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313479256_441074301297160_4045645680689999996_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BzXvvAA_jf4AX8ZvoyI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-PW0VRmR0wPatq0d1oqC6ePOtG7lIdXFqvEfQmqm3lQ&oe=6384022B" alt="purple light" />
                  <img className="sun_light" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313447552_795166854896686_2591347491281059701_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tgKaeaGHcGgAX-87D4s&_nc_oc=AQm_TteOTHijzqhuo9SFAS2B6U8sMUShLb3MjyW3RaHthO9eQEII8Rp_sSknUxGDLTtqvHOBtq9uaBPY_P0tyKpg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSriLuF3KeHLAogomxbbjwanaeM-BFPnGTOwmhKZoGuTg&oe=6384FFC5" alt="sun light" />
                  <div className="hero-title d-flex flex-column">
                    <span>SHIRISH SHAKYA</span>
                    <h1>
YOU'VE SAFELY LANDED ON MY DESIGN WORLD
</h1>
                    
                      <div className="TypeWriterWrapper">
                    <Typewriter
                    style={{letterSpacing:0}}
                        options={{
                          strings: ['You are welcome,', 'Please enjoy your stay'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                      </div>
                      
                      
                      
                  </div>
                  <div className="profile_info_top d-flex w-100">
                    <div className="profile_detail d-flex flex-row">
                      <div className="profile_picture" />
                      <p className="profile_details">Hey!, I’m a product designer based
                        in Nepal who brings concepts,
                        art, and ideas into reality.</p>
                    </div>
                    <div className="social_links d-flex flex-column">
                      <span>shirish.shakya5@gmail.com</span>
                      <div className="time">{time} <span>Local Time</span></div>
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
                  <h2 className="secton-header-h2">FEATURED PROJECTS</h2>
                  
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
                          
                            <span className="MRs">{project.responsibilities} .</span>
                          
                        </span>
                        <h3 className="allCaps">{project.title}</h3>
                        <p className="project-details">{project.projectBrief}</p>
                      </div>
                      <Link className="btn btn-outline-primary position-relative" href={project.link}>
                        VIEW CASE STUDY
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L0.767 5.855H0.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
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
