
import Link from "next/link"
import Head from "./components/header"
import Toggle from "./components/togglemenu"
import ThreeD  from "./components/ThreeD"
import Footer from "./components/Footer"
import Script from 'next/script'
import * as Three from 'three'
import World from "./components/worldcanvas"


export default function Home() {
  return (
    
      <>
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <Link rel="icon" type="image/x-icon" href="../public/favicon.ico"></Link> */}
        <meta property="og:image" content="https://scontent.xx.fbcdn.net/v/t1.15752-9/313273686_827503425189555_3207342809800637848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mtft8E-ZwkUAX9C4eAk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHQ8fYnEQ5DaG4H5No7212K8qluiamCzyTikBCNaWZ0Q&oe=6383DEDB" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Shirish - The Design World</title>
        
        <style dangerouslySetInnerHTML={{__html: "\n\n        .box {\n        display: inline-block;\n        background:transparent;\n        background-size: cover;\n        }\n\n        .canvas {\n        background: transparent;\n        width: 100%;\n        }\n\n        " }} />
        <World/>
        <Toggle></Toggle>
        <div className="mouse-cursor"/>
        {/* <World/> */}
        <main>
          {/* <a href="http://www.onlinewebfonts.com" style={{display: 'none'}}>oNline Web Fonts</a> */}
          <div className="hero-wrapper position-relative">
            <Head></Head>
            <section className="w-100 hero-container" style={{top: 0}} >
              <div className="container position-relative">
                <div className="gradient-shade w-100" />
                <div className="hero border-l-r-b d-flex flex-column">
                  <img className="blur_purple_1" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313479256_441074301297160_4045645680689999996_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BzXvvAA_jf4AX8ZvoyI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-PW0VRmR0wPatq0d1oqC6ePOtG7lIdXFqvEfQmqm3lQ&oe=6384022B" alt="purple light" />
                  <img className="sun_light" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313447552_795166854896686_2591347491281059701_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tgKaeaGHcGgAX-87D4s&_nc_oc=AQm_TteOTHijzqhuo9SFAS2B6U8sMUShLb3MjyW3RaHthO9eQEII8Rp_sSknUxGDLTtqvHOBtq9uaBPY_P0tyKpg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSriLuF3KeHLAogomxbbjwanaeM-BFPnGTOwmhKZoGuTg&oe=6384FFC5" alt="sun light" />
                  <div className="hero-title d-flex flex-column">
                    <span>SHIRISH SHAKYA</span>
                    <h1>YOU'VE SAFELY LANDED ON MY DESIGN WORLD</h1>
                    <p>Enjoy your stay :)</p>
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
                      <span className="time"/>
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
              <div className="border-l-r-b d-flex flex-row container-title">
                <div className="container-header-img">
                  <img  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314373315_462764565923626_5148449814013596555_n.png?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=HC_dKc6prB4AX9nGbvo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRUK5Lp7DndVGDhZ6HFCvniRdaA7IEoiwxMXHra87TuNQ&oe=638D3CFD" alt="UFO" />
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
                    <button className="btn btn-outline-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                      <img className="position-absolute" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314484710_805482084003173_978510453423547081_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gzSRtD5kgYoAX8uy4YW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSTHGF6lyn3hEu9hE-OAcdf12yErgFWuESXjJUvf5TH5w&oe=638D5564" alt="btn-blr" />
                      VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg></button>
                  </div>
                  <div className="p-right d-flex align-items-center justify-content-center">
                    <img className="rightimg" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312701493_3328269600779255_9200647379406778027_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BySecZasVDsAX9yRJIP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQedd4I5pw1TwSnWQ0lRncaAzHZqqtks-lH4sLt2Aw6CA&oe=638D5426" alt="VRS" />
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
                      <h3>SUPER KRISHAK
                        APP DESIGN</h3>
                      <p className="project-details"> Super krishak is introduced into the Nepali market to educate the farmers from the east to the west of Nepal. 
                        The education of farming has never been executed like this in such a  easy and fun way.
                      </p>
                    </div>
                    <button className="btn btn-outline-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                      <img className="position-absolute" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314484710_805482084003173_978510453423547081_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gzSRtD5kgYoAX8uy4YW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSTHGF6lyn3hEu9hE-OAcdf12yErgFWuESXjJUvf5TH5w&oe=638D5564" alt="btn-blr" />
                      VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg></button>
                  </div>
                  <div className="p-right d-flex align-items-center justify-content-center position-relative">
                    <img className="position-absolute sub-image" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314190049_800881437796960_2340701915487757918_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ko89pBYsJGoAX-DKpVC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTlHJ2i7mXABwntqGqgcIUzvtPwEwArHDlXW47Bwcx0Ag&oe=638D7043" alt="tractor imgae" />
                    <img className="rightimg" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314066753_515508703771376_7998324926288853017_n.png?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ptWP_M3seVYAX82wH9c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSX6baGnCv23nshXoUJi9BOBv-ddA5f4jzHOuTXIUBdWQ&oe=638D7DE0" alt="Super Krishak" />
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
                      <img className="position-absolute" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314484710_805482084003173_978510453423547081_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=gzSRtD5kgYoAX8uy4YW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSTHGF6lyn3hEu9hE-OAcdf12yErgFWuESXjJUvf5TH5w&oe=638D5564" alt="btn-blr" />
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
                  <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/315089857_1073661459949892_7142420866194164271_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=O6mvKc0NeJ4AX8rwl69&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTivssnysR45muHs0Hmwwj6I0BjwsEykWqQkyb1bC58Mg&oe=639451ED" alt="moon" />
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
                  <p className="section-details">
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
       
      </>
   
  )
}
