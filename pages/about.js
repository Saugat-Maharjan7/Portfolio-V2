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
        threshold: 0.5, // Adjust the threshold as needed
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
        <link rel="icon" type="image/x-icon" href="https://scontent.xx.fbcdn.net/v/t1.15752-9/314541792_577870877351356_5957186771622315824_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u_olMuCmVgkAX_xU1GZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTVF-d0zRxLjMQRzXBxcGK7IkhNp2goY33AcADQ3vdOKw&oe=638F3735" />
        
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
        </Head>
        <Mouse></Mouse>
        <SubHead></SubHead>
        <main className='aboutMain BGBrandBlack500'>
          
          <section className="about-hero container-fluid position-relative BGNaturalWhite100">
            <img className="blur_purple_1 position-absolute" src="https://i.ibb.co/gMHM5rm/blur-purple.png" alt="purple light" />
            <div className="about-info d-flex flex-row row TXTBrandBlack600">
              <div className="col"><h1>SHIRISH SHAKYA</h1></div>
              <div className="col"><ul className="featured d-flex flex-column">
                  <li>CREATIVE DIRECTOR</li>
                  <li>DIGITAL DESIGNER</li>
                  <li>CREATIVE DEVELOPER</li>
                  <li>UX DESIGNER</li>
                </ul></div>
            </div>
            <h6 >In the field for over 5 years. Currently based in Kathmandu.</h6>
            <div className="about-video">
            <div className="container-fluid d-flex align-items-center justify-content-center  video-slideshow">
              <div className="video-show position-relative">
                <div className="gif-area">
                  <div className="planet-area"><img className="gif" src="https://i.ibb.co/Bg6YSHQ/ezgif-com-gif-maker-1.gif" alt="ezgif-com-gif-maker-1" border={0} />
                  </div>
                  <img src="https://i.ibb.co/RNhPV5t/rotate-circle.png" alt="rotate-circle" className="rotation-text" border={0} />
                </div>
                <video ref={profileVideoref} src="/assets/videos/profile.mp4" className="prof-video" loop muted plays-inline> 
                    </video>                
              </div>
            </div></div>
          </section>
          
          <section>
            <div className="container-fluid about-me">
              <div className="bio-pic d-flex ">
                <div className="image-container">
                  <img src="https://i.ibb.co/tM8GHfk/transparent-me.png" alt="transparent-me" border={0} />
                </div>
                <div className="about-container TXTBrandBlack600">
                  <p>
                  Greetings! I'm Shirish Shakya, your friendly neighborhood Interactive Designer and Art Director hailing from the land of breathtaking mountains, Nepal!

I've mastered the enchanting craft of storytelling through designs and creative direction. 


      <span  className='TXTTailwindOrange600 FONTNEXA SIZEF9'>(Psst, let's keep it between us—don't want those big-shot companies catching wind of my low-key wizardry!) </span>. 
                  </p>
                  <p style={{marginTop: '2rem'}}>
                  I've worn more hats than a hat enthusiast's dream collection—Creative Designer, Art Director, Creative Art Director, UI/UX maestro, Interaction Virtuoso, Product Design Dynamo, Design Director, and all those titles that make your eyes do a little happy dance. 
                  </p>
                </div>
              </div>
              <span className='BlendText'> I HAVE A THING FOR SICK BLEND MODES</span>
            </div>
          </section>
          <div className='arsenal-video-section'>
          <section className='BGBrandBlack500 '>
            <div className="menu">
              <div className="menu__item">
                <div className="marquee">
                  <div className="marquee__inner ">
                    <span>ART DIRECTION . </span>
                    <span>DIGITAL DESIGN .</span>
                    <span>LEAN UX .</span>
                    <span>IMMERSIVE EXPERIENCE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rolling-video position-relative">
              <div className="arsenal-description position-absolute" style={{zIndex: 1}}>
                <h2 >LET’S HAVE A
                  LOOK AT MY ARSENAL</h2>
                <p className='TXTTailwindGray400'>
For me, having a solid set of tools and knowledge is an absolute game-changer. This toolkit has been my secret sauce, working wonders in keeping me motivated every single day.
                </p>
              </div>
              <video 
              ref={arsenalVideoRef} 
              className="arsenal-video"
              src="/assets/videos/Balls.mp4"
              id="arsenalVideo" muted plays-inline />
            </div>
          </section>
          <section className="experience-section"><div className="background">
              <h2 >MY EXPERIENCE</h2>
              <ul className="experience-table">
               <li><span>2023</span><span>GlobalyHub</span><span>Sr. Product Designer</span></li>
                <li><span>2021</span><span>Proshore</span><span>UX Design, Frontend</span></li>
                <li><span>2020 - 2021</span><span>Swivt</span><span>Creative Director</span></li>
                <li><span>2018 - 2020</span><span>Waayu Studios </span><span>UX designer</span></li>
              </ul>
            </div></section>
            <SubFooter/>
            </div>
          {/* footer */}
        </main>
        </m.div>
        </>

        
    )

    
}

export default About;
