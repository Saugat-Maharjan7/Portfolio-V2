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
import { Spring } from "@react-spring/core"
import styles from '../styles/Custom_pages/custom-components/ToggleSwitch.module.css';
import Sidenavigation from "../public/components/side-navigation";
import Typewriter from 'typewriter-effect';
import {projects} from '../public/scripts/Datas/projects'; //projects database
import BGERASER from "../public/components/BgEraserSection";
import React from 'react';
import Button from "../public/components/Button";
// import Spline from '@splinetool/react-spline';
// import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



export default function Home() {

    //button icons
    // const lenis = useLenis(({ scroll }) => {
    //   // called every scroll
    // })
  
    const mainRef = useRef(null);
    // useLenis(mainRef);

    let exploreref=useRef()
    const landingTitle="CRAFTING DIGITAL EXPERIENCE - ONE PIXEL AT A TIME"
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
      const kathmanduTime = date.toLocaleTimeString('en-US', { timeZone: 'Asia/Kathmandu' });
      setTime(kathmanduTime); 
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

        {/* Head */}
        <Head>
        <meta property="og:image" content="/assets/websitebanner.jpg" />
        <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#A855F7" />
        <meta name="theme-color" content="#ffffff" />
        <title>Saugat Maharjan</title>

        </Head>
      
        

        
        <Toggle></Toggle>
        <Mouse 
        mouseTargetElements={mouseTargetElements}
        />


      {/* Mobile Navigation */}
      <Sidenavigation isSidebarOpen={isSidebarOpen}></Sidenavigation>

            
      {/* <World/> */}
      

        <main ref={mainRef} className={checked ? 'main-inactive' : ''}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}></Header>

            <div className="hero-wrapper position-relative">  

              {/* HERO SECTION */}
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

                    {/* HERO SECTION */}
                    <div className="hero border-l-r-b d-flex flex-column">

                      {/* BG Gradient */}
                      {/* <img className="blur_purple_1" src="/assets/blurpurple.png" alt="purple light" />
                      <img className="sun_light" src="/assets/sun light.png" alt="sun light" /> */}

                      {/* Portal */}
                      <div>
                        {/* <Portal/>  */}
                        <div style={{width:"200px",height:'50px',background:"#161515",position:'absolute',bottom:'2%',right:"20px",zIndex:'0'}}></div>
                      </div>

                      {/* Hero Info   */} 
                      <div className="hero-title d-flex flex-column" style={{marginBottom:'4rem'}}>
                        <span style={{fontFamily:"Monument Extended Bold", letterSpacing:0.8}}>ER. SAUGAT MAHARJAN</span>
                      
                        <h1 className="FONTMONUMENT" s >
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
                        
                          
                        <p>Product Designer from Kathmandu, Nepal <span><img src="/nepal-flag.png" alt="Flag of Nepal" /></span></p>

                        {/* TYPEWRITER EFFECT */}
                        {/* <div className="TypeWriterWrapper ">
                        <Typewriter
                        style={{letterSpacing:0}}
                            options={{
                              strings: ['FIGMA . PHOTOSHOP . HTML . CSS . WEBFLOW . ILLUSTRATOR',''],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                          </div> */}
                          
                          
                      </div>

                      {/* More Info */}
                      <div className="profile_info_top d-flex w-100" style={{position:'relative',zIndex:'1'}}>

                        {/* Socials */}
                        <div className="social_links d-flex flex-column">

                          {/* email */}
                          <a href="mailto:saugatmaharjan11@gmail.com" target="_blank"> <span>saugatmaharjan11@gmail.com</span> </a>

                          {/* Time */}
                          <div className="time">{time} <span>Local Time</span></div>

                          {/* Social Media */}
                          <ul style={{textDecoration:'none',listStyle:'none'}} className="contact d-flex flex-row GAPm PADDING0 " >
                            <li ><a className='TXTBrandOrange500 SIZEF6' style={{ textDecoration: 'underline' }} target="_blank" href="https://www.linkedin.com/in/er-saugat-maharjan-471a86225">Linkedin</a></li>
                            <li ><a className='TXTBrandOrange500 SIZEF6' style={{ textDecoration: 'underline' }} target="_blank" href="https://dribbble.com/Saugat7">Dribbble</a></li>
                            <li><a className='TXTBrandOrange500 SIZEF6' style={{ textDecoration: 'underline' }} target="_blank" href="https://www.instagram.com/s.a.u.g.a.t_7/">Instagram</a></li>
                            <li><a className='TXTBrandOrange500 SIZEF6' style={{ textDecoration: 'underline' }} target="_blank" href="https://www.facebook.com/saugat.maharjan/">Facebook</a></li>
                          </ul>
                          
                        </div>

                        {/* Short Info   */}
                        {/* <div className="profile_detail d-flex flex-row">
                          <div className="profile_picture" />
                          <p className="profile_details">Hey!, I'm a product designer based in Nepal. Designing with empathy for Solving complex problems through user-centered design.</p>
                        </div> */}

                      </div>

                    </div>

                </div>

              </section>

            </div>


            {/* WORKS SECTION */}
            <section id="digital-products" className="w-100">
              
              {/* Section TITLE */}
              <div className="container position-relative" id="products-container">

                <div style={{borderTop:"1px solid white"}} className="border-l-r-b d-flex flex-row container-title">
                
                  <div className=" container-header d-flex align-items-center" >
                    <h2 className="secton-header-h2">FEATURED PROJECTS</h2>  
                  </div>

                </div>

              </div>
              
              {/* Works List */}
              
              {/* Static Project List */}
              <div className="container d-flex flex-row" style={{ justifyContent: 'center' }}>

                <ul className="border-l-r-b project-contents">

                  {/* === PROJECT 1 === */}
                  <li className="project d-flex" id="gamified-healthy-eating-app">

                    {/* Description */}
                    <div className="p-left d-flex flex-column">

                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          <span className="MRm">LMS</span>
                          <span className="MRm">User Interface</span>
                          <span className="MRm">User Experience</span>
                          <span className="MRm">App Design</span>
                        </span>

                        <h3 className="allCaps">UDAAN</h3>
                                            
                        <p className="project-details">
                          UDAAN is a mobile Learning Management System (LMS) aimed at providing accessible education through structured online courses.
                        </p>

                      </div>

                    <a href="https://dribbble.com/shots/25920729-Udaan-V2-0" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="medium"
                        customButtonType="outline"
                        label="view case study"
                        rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                          }
                      />
                    </a>

                    </div>

                    {/* Image */}
                    <a href="https://dribbble.com/shots/25920729-Udaan-V2-0" target="_blank" className="p-right d-flex align-items-center justify-content-center position-relative">
                      <img className="rightimg" src="/assets/projects/Udaan.png" alt="featured-image" />
                    </a>

                  </li>

                  {/* Divider */}
                  <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />


                  {/* === PROJECT 2 === */}
                  <li className="project d-flex" id="gamified-healthy-eating-app">

                    {/* Description */}
                    <div className="p-left d-flex flex-column">

                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          <span className="MRm">User Interface</span>
                          <span className="MRm">Responsive Design</span>
                          <span className="MRm">Content Creations</span>
                        </span>

                        <h3 className="allCaps">Shanti Yoga Ashram - Website</h3>
                                            
                        <p className="project-details">
                          Shanti Yoga Ashram is an organization who aims to preserve and transmit the knowledge from ancient teachings. This website seeks to offer an enhanced experience to visitors and residents, promoting holistic well-being through yoga, meditation, healthy living, and spiritual growth.
                        </p>

                      </div>

                    <a href="https://dribbble.com/shots/25606934-Shanti-Yoga-Ashram-Website" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="medium"
                        customButtonType="outline"
                        label="view case study"
                        rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                          }
                      />
                    </a>

                    </div>

                    {/* Image */}
                    <a href="https://dribbble.com/shots/25606934-Shanti-Yoga-Ashram-Website" target="_blank" className="p-right d-flex align-items-center justify-content-center position-relative">
                      <img className="rightimg" src="/assets/projects/ShantiYogaAshram.png" alt="featured-image" />
                    </a>

                  </li>

                  {/* Divider */}
                  <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />

                  {/* === PROJECT 3 === */}
                  <li className="project d-flex" id="gamified-healthy-eating-app">

                    {/* Description */}
                    <div className="p-left d-flex flex-column">

                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          <span className="MRm">UX/UI</span>
                          <span className="MRm">App Design</span>
                          <span className="MRm">Design Challenge</span>
                        </span>

                        <h3 className="allCaps">GAMIFIED HEALTHY EATING APP</h3>
                        
                        <p className="project-details">
                          Gamified mobile app which is playful and helps people to recommend healthy eating lifestyle promoting Healthy Eating Habits for Good Health and Proper Well-Being targeting the users who are forced to deal with fast food on daily basis because of their busy schedule.
                        </p>

                      </div>

                      <a href="https://dribbble.com/shots/25606845-Gamified-Healthy-Eating-App" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="medium"
                          customButtonType="outline"
                          label="view case study"
                          rightIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          }
                        />
                      </a>
                    </div>

                    {/* Image */}
                    <a href="https://dribbble.com/shots/25606845-Gamified-Healthy-Eating-App" target="_blank" className="p-right d-flex align-items-center justify-content-center position-relative">
                      <img className="rightimg" src="/assets/projects/HealthyEating.png" alt="featured-image" />
                    </a>

                  </li>

                  {/* Divider */}
                  <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />

                  {/* === PROJECT 4 === */}
                  <li className="project d-flex" id="globalyhub-website">

                    {/* Description */}
                    <div className="p-left d-flex flex-column">
                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          <span className="MRm">Website Design</span>
                          <span className="MRm">Webflow</span>
                          <span className="MRm">Responsive Design</span>
                        </span>
                        <h3 className="allCaps">GLOBALYHUB WEBSITE</h3>
                        <p className="project-details">
                          Website designed for a product development agency which creates software products that are globally applicable, add values and solve problems of businesses as well as individuals. The website was designed in Figma and completely deployed live with help of site builder, Webflow.
                        </p>
                      </div>

                      <a href="https://dribbble.com/shots/25606893-GlobalyHub-Company-Website" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="medium"
                          customButtonType="outline"
                          label="view case study"
                          rightIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          }
                        />
                      </a>
                    </div>

                    {/* Image */}
                    <a href="https://dribbble.com/shots/25606893-GlobalyHub-Company-Website" target="_blank" className="p-right d-flex align-items-center justify-content-center position-relative">
                      <img className="rightimg" src="/assets/projects/GlobalyHub.png" alt="featured-image" />
                    </a>
                  </li>

                </ul>

              </div>
              
              {/* Automated Project List */}
              {false && (
              <div className="container d-flex flex-row " style={{justifyContent: 'center'}}>

                {/* projects container */}
                <ul className="border-l-r-b project-contents">
                {projects.filter(project => project.featured === true).map((project, index, array) => (
                  <React.Fragment key={project.id}>

                    {/* PROJECT LISTS */}
                    <li  className="project d-flex" id={project.title} >

                      {/* PROJECT DESCRIPTION */}
                      <div className="p-left d-flex flex-column">

                        <div className="project-detail d-flex flex-column">
                          
                          {/* Badge Labels */}
                          <span className="project-leading">

                            {/* Mapping responsibilities */}
                            
                            {project.responsibilities.map((responsibility, resIndex) => (
                            <span key={resIndex} className="MRm">{responsibility}</span>
                            ))}  

                          </span>
                          
                          {/* Project Title */}
                          <h3 className="allCaps">{project.title}</h3>

                          {/* Project Brief */}
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

                      {/* PROJECT IMAGE */}
                      <Link href={project.link} className="p-right d-flex align-items-center justify-content-center position-relative">

                        <div className="position-absolute sub-image">
                          <img src={project.projectMascotImageLink} alt="Project Mascot" />
                        </div>

                        <img className="rightimg" src={project.featuredImageLink} alt="featured-image" />

                      </Link>
                      
                    </li>
                    
                    {/* No of Projects to Display */}
                    {index !== array.length - 1 && ( // Add a div except for the last project
                      <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />
                        )}
                    </React.Fragment>
                    ))}
                  
                </ul>
                {/* end of project container */}

              </div>
              )}

            </section> 

            {/* TESTIMONIALS */}
            <section id="digital-products" className="w-100">
              
              {/* Section TITLE */}
              <div className="container position-relative" id="products-container">

                <div style={{borderTop:"1px solid white"}} className="border-l-r-b d-flex flex-row container-title">
                
                  <div className=" container-header d-flex align-items-center" >
                    <h2 className="secton-header-h2">CLIENT VOICES</h2>  
                  </div>

                </div>

              </div>
              
              {/* Testimonials List */}
              
              {/* Static Testimonials */}
              <div className="container d-flex flex-row" style={{ justifyContent: 'center' }}>

                <ul className="border-l-r-b project-contents">

                  {/* === Testimonial 1 === */}
                  <li className="project d-flex" id="gamified-healthy-eating-app">

                    {/* Description */}
                    <div className="p-left d-flex flex-column w-100">

                      <div className="project-detail d-flex flex-column">

                        {/* Sayings */}
                        <p className="project-details">
                        “I have worked with Saugat on revamping the marketing site for SCSS Consulting. He is quite prompt with deadlines and focuses on designing with a logical approach that aligns with user needs and design standards. In my opinion Saugat is a very determined designer who tries to achieve effective design and validate his work with feedback. I would say I am impressed with Saugat's work ethic and his ability to transform design problem statements with viable solutions.”
                        </p>

                        {/* Clients Info */}
                        <h5 className="allCaps">Aayush Mishra</h5>

                        <span className="project-leading">
                          <span className="MRm">Project Manager, SCSS Consulting</span>
                        </span>

                      </div>

                    </div>

                  </li>

                  {/* Divider */}
                  <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />

                  {/* === Testimonial 2 === */}
                  <li className="project d-flex" id="gamified-healthy-eating-app">

                    {/* Description */}
                    <div className="p-left d-flex flex-column w-100">

                      <div className="project-detail d-flex flex-column">

                        {/* Sayings */}
                        <p className="project-details">
                        “Working with Saugat on our yoga ashram's website was a delight. The dedication to understanding our organization's ethos and operations was impressive, resulting in a design that that exceeds our expectations. The attention to detail and commitment to our vision were evident throughout the process. The website now serves as a perfect reflection of our ashram's values and offerings effectively. Highly recommended for their expertise and dedication.”
                        </p>

                        {/* Clients Info */}
                        <h5 className="allCaps">Lilendra Purush Dhakal</h5>

                        <span className="project-leading">
                          <span className="MRm">Shanti Yoga Ashram</span>
                        </span>

                      </div>

                    </div>

                  </li>



                </ul>

              </div>
              
              {/* Automated Project List */}
              {false && (
              <div className="container d-flex flex-row " style={{justifyContent: 'center'}}>

                {/* projects container */}
                <ul className="border-l-r-b project-contents">
                {projects.filter(project => project.featured === true).map((project, index, array) => (
                  <React.Fragment key={project.id}>

                    {/* PROJECT LISTS */}
                    <li  className="project d-flex" id={project.title} >

                      {/* PROJECT DESCRIPTION */}
                      <div className="p-left d-flex flex-column">

                        <div className="project-detail d-flex flex-column">
                          
                          {/* Badge Labels */}
                          <span className="project-leading">

                            {/* Mapping responsibilities */}
                            
                            {project.responsibilities.map((responsibility, resIndex) => (
                            <span key={resIndex} className="MRm">{responsibility}</span>
                            ))}  

                          </span>
                          
                          {/* Project Title */}
                          <h3 className="allCaps">{project.title}</h3>

                          {/* Project Brief */}
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

                      {/* PROJECT IMAGE */}
                      <Link href={project.link} className="p-right d-flex align-items-center justify-content-center position-relative">

                        <div className="position-absolute sub-image">
                          <img src={project.projectMascotImageLink} alt="Project Mascot" />
                        </div>

                        <img className="rightimg" src={project.featuredImageLink} alt="featured-image" />

                      </Link>
                      
                    </li>
                    
                    {/* No of Projects to Display */}
                    {index !== array.length - 1 && ( // Add a div except for the last project
                      <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />
                        )}
                    </React.Fragment>
                    ))}
                  
                </ul>
                {/* end of project container */}

              </div>
              )}

            </section> 


            {/* <BGERASER/>   
                <ThreeD/> */}

            {/* FOOTER */}
            <Footer/>

        </main>
       
        <Script type="module" src="/script.js"></Script>
        </m.div>           
      
   
  )
}