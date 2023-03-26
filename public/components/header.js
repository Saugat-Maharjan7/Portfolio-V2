import { useState,useEffect } from "react";
import { easeInOut, easeOut, motion as m } from "framer-motion"
import Link from "next/link";


export default function head({ toggleSidebar,isSidebarOpen }) {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    let scrollable=document.querySelector('main')


    const handleScroll = (event) => {

      if (event.deltaY > 0) {
        console.log("scrolled")

        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    scrollable.addEventListener('wheel', handleScroll);

    return () => {
      scrollable.removeEventListener('wheel', handleScroll);
    };
  }, []);


  return (
    <m.header className={`${showNav ? '' : 'header-visible'}`}>
          <div className="container">
            <nav className="d-flex flex-row justify-content-between align-items-center">
              <Link className="Logo d-flex flex-row" style={{textDecoration:"none",color:"white"}} href="/" id="home">
                <div className="Logo-container" />
                <span>SHIRISH.</span> 
              </Link>
              <div className="links d-flex flex-row">
                
                <ul className="navbar-nav me-auto d-flex flex-row">
                <li className="nav-item d-flex flex-row ">
                <Link className="anchor " href="about" id="about">about</Link>

                </li>


                  {/* <li className="nav-item d-flex flex-row "><a className="anchor" href="#" id="about">about</a></li> */}
                  <li className="nav-item d-flex flex-row ">
                  <Link className="anchor thiss" href="/work" id="works">works</Link>
                    {/* <a className="anchor" href="#" id="works">work</a> */}
                    </li>
                  <li className="nav-item d-flex flex-row" id="contact"><Link className="anchor" href="/contact" id="contact"><span id="contact">LET'S CONNECT</span><div id="contact" className="send-btn "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                        </svg></div></Link></li>                            
                </ul>
                <button onClick={ toggleSidebar } 
                
                className=
                {`ham-menu ${isSidebarOpen ? 'ham-icon-active' : ''} ${!isSidebarOpen ? 'ham-icon-inactive':''}`}
                
                
                style={{height: '3rem', width: '3rem'}}><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className="topRect" x={6} y={5} width={12} height={2} fill="#D9D9D9" />
                    <rect className="midRect" y={11} width={24} height={2} fill="#D9D9D9" />
                    <rect className="lowRect" x={6} y={17} width={12} height={2} fill="#D9D9D9" />
                  </svg></button>
              </div>  
            </nav>
          </div>
        </m.header>
  );
}