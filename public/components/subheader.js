import { useState,useEffect } from "react";
import { easeInOut, easeOut, motion as m } from "framer-motion"
import Link from "next/link";



function subhead(){
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // let scrollable=document.querySelector('main')


    const handleScroll = (event) => {

      if (event.deltaY > 0) {
        console.log("scrolled")

        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
    return(
        <m.nav  className={`subHeader ${showNav ? '' : 'header-visible'}`}
        
        initial={{
          y:-100,
          
        }}
        
        animate={{
          y:0,
         
        }}
        transition={{
          duration:1.5,
          
        }}
        >
              <div className="container">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <Link className="Logo d-flex flex-row align-items-center justify-content-center" style={{textDecoration:"none",color:"white"}} href="/" id="home">
                    <div className="d-flex flex-row align-items-center justify-content-center btn-contain"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg> 
                    </div><span>Back</span>
                  </Link>
                  
                  <div className="links d-flex flex-row">
                    
                   
                    
                  </div>  
                </div>
              </div>
            </m.nav>
    )
}

export default subhead;