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
      arsenalVideoRef.current.play()

    })
    
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
        <main className='aboutMain'>
          
          <section className="about-hero container-fluid position-relative">
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
          </section>
          <section className="about-video">
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
            </div></section>
          <section>
            <div className="container-fluid about-me">
              <div className="bio-pic d-flex ">
                <div className="image-container">
                  <img src="https://i.ibb.co/tM8GHfk/transparent-me.png" alt="transparent-me" border={0} />
                </div>
                <div className="about-container TXTBrandBlack600">
                  <p>
                    Hey! I am Shirish Shakya, an Interactive designer and Art Director here from the country of mountains, Nepal.
                    I hone the art of story telling through designs and creative direction. (ssh, dont let giant companies know about it, I try stay low key). 
                  </p>
                  <p style={{marginTop: '2rem'}}>
                    I’ve wore many hats, creative designer, art director, creative art director, UI / UX designer, interaction designer, product designer, design director and all those things that make your eyes swoon over.
                  </p>
                </div>
              </div>
              <span>I HAVE A THING FOR SICK BLEND MODES</span>
            </div>
          </section>
          <section className='BGBrandBlack500'>
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
                <p className='TXTTailwindGray400'>Having a good set of tools and knowledge goes way ahead for me.
                  This set of tools have worked wonders for me in staying motivated everyday.
                </p>
              </div>
              <video 
              ref={arsenalVideoRef} 
              className="arsenal-video"
              src="/assets/videos/Balls.mp4"
              id="arsenalVideo" loop muted plays-inline />
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
          {/* footer */}
        </main>
        </m.div>
        </>

        
    )

    
}
// About.getInitialProps = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//           data: {
//             title: 'Welcome to my website',
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           },
//         });
//     }, 4000);
//   });
// };
export default About;


