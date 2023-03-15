import Script from 'next/script'
import { useEffect } from 'react';
import { useRef } from 'react';
// import "../styles/Custom_pages/aboutpage.scss"
// import profile from "../public/assets/videos/profile.mp4"
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import Link from "next/link";
import Head from "../public/components/header"





function About(){
    const videoref=useRef();

    useEffect(()=>{
        console.log(videoref)

        videoref.current.play()
    })
    
    return(
        <>
        <m.div>
       
        {/* <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta property="og:image" content="https://i.ibb.co/gPk5DGs/Thumbnail.jpg" />
        <title>Shirish - About</title>
        <link rel="icon" type="image/x-icon" href="https://scontent.xx.fbcdn.net/v/t1.15752-9/314541792_577870877351356_5957186771622315824_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u_olMuCmVgkAX_xU1GZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTVF-d0zRxLjMQRzXBxcGK7IkhNp2goY33AcADQ3vdOKw&oe=638F3735" />
        
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
       
        <Mouse></Mouse>
        <Head></Head>
        <main>
          <div className="head">
            <div className="container">
              <nav className="d-flex flex-row align-items-center">
                <div className="Logo d-flex flex-row ">
                  {/* <a tabindex="0" class="Logo-container" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a> */}
                  <a href="./index.html" className="Logo-container " tabIndex={0} data-bs-toggle="popover" data-bs-placement="right" data-bs-trigger="hover focus" data-bs-content="Back to the world, Yay!">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                  </a> 
                </div>
              </nav>
            </div>
          </div>
          <section className="about-hero container-fluid position-relative">
            <img className="blur_purple_1 position-absolute" src="https://i.ibb.co/gMHM5rm/blur-purple.png" alt="purple light" />
            <div className="about-info d-flex flex-row row">
              <div className="col"><h1>SHIRISH SHAKYA</h1></div>
              <div className="col"><ul className="featured d-flex flex-column">
                  <li>CREATIVE DIRECTOR</li>
                  <li>DIGITAL DESIGNER</li>
                  <li>CREATIVE DEVELOPER</li>
                  <li>UX DESIGNER</li>
                </ul></div>
            </div>
            <h6>In the game for over 5 years. Currently based in Kathmandu.</h6>
          </section>
          <section className="about-video">
            <div className="container-fluid d-flex align-items-center justify-content-center  video-slideshow">
              <div className="video-show position-relative">
                <div className="gif-area">
                  <div className="planet-area"><img className="gif" src="https://i.ibb.co/Bg6YSHQ/ezgif-com-gif-maker-1.gif" alt="ezgif-com-gif-maker-1" border={0} />
                  </div>
                  <img src="https://i.ibb.co/RNhPV5t/rotate-circle.png" alt="rotate-circle" className="rotation-text" border={0} />
                </div>
                <video ref={videoref} src="/assets/videos/profile.mp4" className="prof-video" autoPlay> 
                        {/* <source src="/assets/videos/profile.mp4" type='video/mp4'></source> */}

                    </video>                
              </div>
            </div></section>
          <section>
            <div className="container-fluid about-me">
              <div className="bio-pic d-flex ">
                <div className="image-container">
                  <img src="https://i.ibb.co/tM8GHfk/transparent-me.png" alt="transparent-me" border={0} />
                </div>
                <div className="about-container">
                  <p>
                    Hey! I am Shirish Shakya, an Interactive designer and art director here from the country of mountains, Nepal.
                    I hone the art of story telling through designs and creative direction. (ssh, dont let giant companies know about it, I try stay low key). 
                  </p><p style={{marginTop: '2rem'}}>
                    I’ve wore many hats, creative designer, art director, creative art director, UI / UX designer, interaction designer, product designer, design director and all those things that make your eyes swoon over.
                  </p>
                </div>
              </div>
              <span>I HAVE A THING FOR SICK BLEND MODES</span>
            </div>
          </section>
          <section>
            <div className="menu">
              <div className="menu__item">
                <div className="marquee">
                  <div className="marquee__inner">
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
                <p>Having a good set of tools and knowledge goes way ahead for me.
                  This set of tools have worked wonders for me in staying motivated everyday.
                </p>
              </div>
              <video className="arsenal-video" id="arsenalVideo" muted plays-inline />
            </div>
          </section>
          <section className="experience-section"><div className="background">
              <h2 >MY EXPERIENCE</h2>
              <ul className="experience-table">
                <li><span>2021 - now</span><span>Proshore</span><span>UX Design, Frontend</span></li>
                <li><span>2020 - 2021</span><span>Swivt</span><span>Creative Director</span></li>
                <li><span>2018 - 2020</span><span>Waayu Studios </span><span>UX designer</span></li>
              </ul>
            </div></section>
          <footer>
            <div className="container">
              <div className="copyrights d-flex flex-row justify-content-between">
                <span>Designed and Developed with love and threejs</span>
                <p>© Shirish Shakya.<span className="dated"> </span></p>
                <span>All Rights Reserved</span>
              </div>
            </div>
          </footer>
        </main>
        </m.div>
        </>

        
    )

    
}
About.getInitialProps = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
          data: {
            title: 'Welcome to my website',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        });
    }, 4000);
  });
};
export default About;


