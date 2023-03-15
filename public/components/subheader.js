import { useState,useEffect } from "react";
import { easeInOut, easeOut, motion as m } from "framer-motion"
import Link from "next/link";



function subhead(){
  
    return(
        <m.nav className="subHeader"
        
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
                    <div className="d-flex flex-row align-items-center justify-content-center"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
                    </div>
                  </Link>
                  
                  <div className="links d-flex flex-row">
                    
                   
                    
                  </div>  
                </div>
              </div>
            </m.nav>
    )
}

export default subhead;