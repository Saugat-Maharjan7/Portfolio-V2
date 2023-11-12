
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




export default function Home() {


  
 
    let exploreref=useRef()
    const [isToggled, setToggled] = useState(false);
    const [time, setTime] = useState('');


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
    useEffect(()=>{
      let scrollable=document.querySelector('main')
      let explore=document.querySelector('.explore-world')
      
      scrollable.addEventListener('scroll',(e)=>{
        let t=scrollable.scrollTop;
        if (t>0){
          explore.style.display="none"

        }
      if(t<=0){
        explore.style.display="block"
       
      }
        
      })
    })
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

        <style dangerouslySetInnerHTML={{__html: "\n\n        .box {\n        display: inline-block;\n        background:transparent;\n        background-size: cover;\n        }\n\n        .canvas {\n        background: transparent;\n        width: 100%;\n        }\n\n        " }} />
        </Head>
        <World></World>
        
        <Toggle></Toggle>
        <Mouse></Mouse>

        {/* switch button */}

        <div ref={exploreref} className={`${styles.toggleWrapper} explore-world` } onClick={()=>setChecked(!checked)}>
        <div
          className={`${styles.toggleSwitch} ${checked ? styles.checked : ''} ${!checked ? styles.unchecked:''}`}
        />
      </div>

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
                    <p>
                    <Typewriter
                        options={{
                          strings: ['You are welcome,', 'Please enjoy your stay'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                      
                      
                      </p>
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
                      <ul className="d-flex flex-row" >
                        <li><a href="https://www.linkedin.com/in/shirish-shakya-ba8a49200/">Linkedin</a></li>
                        <li><a href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
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
                <div className="container-header-img">
                  <img style={{width:"75px",transform:"scale(3.5) translateY(18px)"}}  src="https://i.ibb.co/54TbLsP/UFO.png" alt="UFO" />
                </div>
                <div className=" container-header d-flex align-items-center" >
                  <h2 className="secton-header-h2">DIGITAL PRODUCTS</h2>
                  <span className="leader-subtitle">.THE UFO</span>
                </div>
              </div>
            </div>
            <div className="container d-flex flex-row " style={{justifyContent: 'center'}}>
              {/* projects container */}
              <ul className="border-l-r-b project-contents">
                {/* first project */}
                <li className="project d-flex" id="VRS">
                  <div className="p-left d-flex flex-column">
                    <div className="project-detail d-flex flex-column">
                      <span className="project-leading">Research . UI Design . Frontend dev. </span>
                      <h3>VENDOR RATING SOLUTIONS
                        MANAGEMENT PLATFORM</h3>
       
                      <p className="project-details">Vendor Rating Solution is a next and robust level of supply chain management for any B2B companies that rely on large chunk of supply data to be carried on a daily basis.</p>
                    </div>
                    <button  className="btn btn-outline-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                      VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg></button>
                  </div>
                  <div className="p-right d-flex align-items-center justify-content-center">
                    <img className="rightimg" src="https://i.ibb.co/2ntxsfx/desktop-frame.png" alt="VRS" />
                  </div>
                  {/* modal of the vrs */}
                  <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Vendor Rating Solution</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          Case studies are on its way
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* second project */}
                <li className="project d-flex" id="Super Krishak">
                  <div className="p-left d-flex flex-column">
                    <div className="project-detail d-flex flex-column">
                      <span className="project-leading">UX Research . Branding . UI Design </span>
                      <h3 className="allCaps">       
                        {projects.find(item => item.id === 1)?.title || 'Item not found'}
                      </h3>
                      <p className="project-details"> Super krishak is introduced into the Nepali market to educate the farmers from the east to the west of Nepal. 
                        The education of farming has never been executed like this in such a  easy and fun way.
                      </p>
                    </div>
                    <button className="btn btn-outline-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                      VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg></button>
                  </div>
                  <div className="p-right d-flex align-items-center justify-content-center position-relative">
                    <img className="position-absolute sub-image" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314190049_800881437796960_2340701915487757918_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ko89pBYsJGoAX-DKpVC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTlHJ2i7mXABwntqGqgcIUzvtPwEwArHDlXW47Bwcx0Ag&oe=638D7043" alt="tractor imgae" />
                    <img className="rightimg" src="https://i.ibb.co/7n53gy1/super-krishak.png" alt="Super Krishak" />
                  </div>
                  {/* modal of the krishak */}
                  <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Super Krishak</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          Case studies are on its way
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* third project */}
                <li className="project d-flex" style={{border: 'none'}} id="AEOS">
                  <div className="p-left d-flex flex-column">
                    <div className="project-detail d-flex flex-column">
                      <span className="project-leading">Research . UI Design </span>
                      <h3>AEOS AUCTION
                        BIDDING APP DESIGN</h3>
                      <p className="project-details"> AEOS auction brings the wine lovers a step closer to the wines that they dream of buying, whether it be for the collection purposes or the vintage test requirement.</p>
                    </div>
                    <button className="btn btn-outline-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                      VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg></button>
                  </div>
                  <div className="p-right d-flex align-items-center justify-content-center position-relative">
                    <img style={{transform: 'scale(0.4)', bottom: '-210px'}} className="position-absolute sub-image" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314461857_510107067692356_5665182089033677973_n.png?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4SmD7aRNlp8AX_D8cfd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvZLVXKdUEl9Gmei9Nl1QpF-P2OxUvbbR6q3l_Igba9Q&oe=638D8AAA" alt="wine bottle" />
                    <img className="rightimg" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314451535_861583205276439_3878732759128021508_n.png?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bnHA3mkYAycAX_3KE4Z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTh8ag4WwRmWs-sq_DRfKGDOL_b9mNSkoEiB56nn24sSg&oe=638D8D71" alt="AEOS" />
                  </div>
                  {/* modal of the AEOS */}
                  <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">AEOS Auction</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          Case studies are on its way
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end of project container */}
            </div>
          </section> 
          <section className="section-visual-designs" id="visual-designs">
            {/* this isthe header of the container */}
            <div className="container">
              <div className="border-l-r-b d-flex flex-row container-title">
                <div className="container-header-img">
                  <img style={{width:"75px",transform:"scale(2.5) translateY(2px)"}}  src="https://i.ibb.co/3d1pzkP/moon2-1.png" alt="moon" />
                </div>
                <div className=" container-header d-flex align-items-center" >
                  <h2 className="secton-header-h2">VISUAL DESIGNS</h2>
                  <span className="leader-subtitle">.THE MOON</span>
                </div>
              </div>
            </div>
            <div className="container d-flex flex-column " style={{justifyContent: 'center'}}>
              <div className="border-l-r-b w-100 visual-designcontainer">
                <div >
                  <p className="section-details TXTTailwindGray400">
                    Visual Designs are the key fundamental for strong designs in any medium whether it be on paper or screen. It has always been supporting creativity and a fun thing to play around.
                  </p>
                </div>
              </div> 
              <div className="designs-grid-container position-relative" style={{overflow: 'hidden'}}>
                <div className="tips position-absolute">
                  <h5>Tip:</h5>
                  <p>Somethings just need a TAP for magic to happen</p>
                </div>
                <div className="eraseable-content position-relative">
                  <div className="box" style={{overflow: 'hidden'}}>
                    <canvas id="canvas" />
                  </div>
                  <div className="designs-grid" style={{pointerEvents: 'none'}}>
                    <div className="design " id="design-0"><img src="https://i.ibb.co/r4ZHkfC/valentine-choclate-1.png" alt="choclate" /></div>
                    <div className="design" id="design-1"><img src="https://i.ibb.co/fq9t1X9/Booklet.png" alt="Booklet design" /></div>
                    <div className="design" id="design-2"><img src="https://i.ibb.co/tMGvw5P/Basanta.png" alt="Basanta poster" /></div>
                    <div className="design" id="design-3"><img src="https://i.ibb.co/Kz3MLg6/nft.png" alt="NFT" /></div>
                    <div className="design" id="design-4"><img src="https://i.ibb.co/pn8gBW8/Posters.png" alt="company posters" /></div>
                  </div>
                </div>
              </div>               
            </div>
          </section>   
         <ThreeD/>
         <Footer/>
        </main>
        <Script type="module" src="/script.js"></Script>
        </m.div>           
      
   
  )
}
