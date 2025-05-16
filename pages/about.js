import Script from 'next/script'
import { useEffect } from 'react';
import SubFooter from '../public/components/subfooter';

import { useRef } from 'react';
// import "../styles/Custom_pages/aboutpage.scss"
// import profile from "../public/assets/videos/profile.mp4"
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import Link from "next/link";
import SubHead from "../public/components/subheader"
import Head from 'next/head';
import Footer from "../public/components/Footer"






function About(){
    const profileVideoref=useRef();
    const arsenalVideoRef=useRef()

    useEffect(()=>{

      profileVideoref.current.play()
      // arsenalVideoRef.current.play()
    }
    )

    useEffect(() => {
      // Function to handle video play when entering the section
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the video when it comes into view
            arsenalVideoRef.current.play();
          } else {
            // Pause the video when it goes out of view
            arsenalVideoRef.current.pause();
            // Reset the video to the beginning
            arsenalVideoRef.current.currentTime = 0;
          }
        });
      };
  
      // Create an intersection observer
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1, // Adjust the threshold as needed
      });
  
      // Observe the target element (arsenal video section)
      observer.observe(document.querySelector('.arsenal-video-section'));
  
      // Clean up the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    }, []);

    
    
    return(
        <>
        <m.div>
       <Head>
        
        <meta property="og:image" content="https://i.ibb.co/gPk5DGs/Thumbnail.jpg" />
        <title>About</title>        
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
        </Head>
        <Mouse></Mouse>
        <SubHead></SubHead>
        <main className='aboutMain BGBrandBlack500 pt-8	'>
          
          <section className="about-hero container-fluid position-relative BGTailwindStone200">

            {/* BG */}
            <img className="blur_purple_1 position-absolute" src="/assets/blurpurple.png" alt="purple light" />

            {/* Title Tags */}
            <div className="about-info d-flex flex-row row TXTBrandBlack600">
              <div className="col"><span>ER.</span><h1> SAUGAT MAHARJAN</h1></div>
              <div className="col"><ul className="featured d-flex flex-column">
                  <li>PRODUCT DESIGNER</li>
                  <li>UX DESIGNER</li>
                  <li>UI DESIGNER</li>
                  <li>REGISTERED IT ENGINEER</li>
                </ul></div>
            </div>

            {/* Experience */}
            <h6 >In the field for OVER 3 YEARS. Currently based in KATHAMNDU, NEPAL.</h6>

            {/* VIDEO ABOUT */}
            <div className="about-video">
              <div className="container-fluid d-flex align-items-center justify-content-center  video-slideshow">
                <div className="video-show position-relative">
                  <div className="gif-area">
                    <div className="planet-area"><img className="gif" src="/assets/smallplanet.gif" alt="ezgif-com-gif-maker-1" border={0} />
                    </div>
                    <img src="/assets/rotatecircle.png" alt="rotate-circle" className="rotation-text" border={0} />
                  </div>
                  <video ref={profileVideoref} src="/assets/videos/profile.mp4" className="prof-video" loop muted playsInline={true}> 
                      </video>                
                </div>
              </div>
            </div>
          </section>
          

          {/* ABOUT ME */}
          <section>
            <div className="container-fluid about-me">
              <div className="bio-pic d-flex ">

                {/* My IMAGE */}
                <div className="image-container">
                  <img src="/assets/transparentme1.png" alt="transparent-me" border={0} />
                </div>

                {/* ABOUT INFO */}
                <div className="about-container TXTBrandBlack600">
                  <p>
                  Namaste! I'm Saugat Maharjan, a dedicated UI/UX Designer with an Engineering degree from Kathmandu, Nepal, and over two years of industry experience. My expertise spans the full design process—from user research to high-fidelity interfaces—focused on delivering visually compelling and functional digital experiences. My passion for design began during my undergraduate studies and has since evolved into a career driven by purpose and creativity.

                  {/* <span  className='FONTNEXA SIZEF9'>(Psst, let's keep it between us—don't want those big-shot companies catching wind of my low-key wizardry!) </span>.  */}

                  </p>

                  <p style={{marginTop: '2rem'}}>
                  I believe in the transformative power of design to enhance everyday interactions. Rooted in user-centric principles, my approach emphasizes clarity, usability, and engagement. I continuously seek to innovate by exploring new methodologies and staying current with emerging trends and technologies in the design field. 
                  </p>
                </div>

              </div>

              {/* BLEND TEXT */}
              <span className='BlendText'> SIMPLIFYING IDEAS INTO BEAUTIFUL, EFFECTIVE INTERFACES </span>

            </div>
          </section>


          {/* MARQUEE SECTION */}
          <div className='arsenal-video-section'>

          <section className='BGBrandBlack500 '>
            <div className="menu">
              <div className="menu__item">
                <div className="marquee">
                  <div className="marquee__inner ">
                    <span> USER INTERFACE . </span>
                    <span>USER EXPERIENCE .</span>
                    <span>WEB DEVELOPMENT .</span>
                    <span>VISUAL DESIGN .</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROLLING BALLS VIDEO */}
            <div className="rolling-video position-relative">

              <div className="arsenal-description position-absolute" style={{zIndex: 1}}>

                <h2 >BEYOND MY ENTHUSIASM FOR TECHNOLOGY</h2>

                <p className='TXTTailwindGray400'>
                I have keen interest in traveling, drawing, playing video games, listening to music, learning new things, and embracing exciting challenges. Moreover, I am a food enthusiast who enjoys exploring out different cuisines at all times.
                </p>

              </div>

              <video 
              ref={arsenalVideoRef} 
              className="arsenal-video"
              src="/assets/videos/Balls.mp4"
              id="arsenalVideo" muted playsInline={true} />
            </div>
          </section>


          {/* MY EXPERIENCE */}
          <section className="experience-section"><div className="background">

              <h2 >MY EXPERIENCE</h2>

                <ul className="experience-table">

                <li><span>2025 - Current</span><span>EKbana Solutions</span><span>Mid UI/UX Designer</span></li>
                <li><span>2025</span><span>Aitrix Labs</span><span>Part-Time Designer</span></li>
                <li><span>2023 - 2024</span><span>SCSS Consulting</span><span>Freelance Designer</span></li>
                <li><span>2022 - 2023</span><span>GlobalyHub</span><span>Product Designer</span></li>
                <li><span>2022</span><span>GlobalyHub</span><span>Associate UI/UX and Graphics Designer</span></li>
                <li><span>2021 - 2022</span><span>IntroCept</span><span>UI/UX Design Intern</span></li>

                </ul>

            </div>
          </section>
            
            <SubFooter/>
            </div>

          {/* footer */}
        </main>
        </m.div>
        </>

        
    )

    
}

export default About;
