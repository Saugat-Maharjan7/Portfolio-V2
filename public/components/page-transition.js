import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
// import Router from "next/router"
import Typewriter from 'typewriter-effect';





export default function pageTransition() {

   const router=useRouter()
   const [title, setTitle]=useState("mywebsite")

   useEffect(()=>{
    if (router.asPath === '/projects'){
      setTitle('Projects');
    }else if (router.asPath === '/about') {
      setTitle('about');
    } 
    
   })

  return (
<div className='page-transition loader-inactive'>
    <div className='loader'>
        <div className='load-bar'></div>
    </div> 
    <div className='projectContent d-flex justify-content-center align-items-center'>
      {/* <h2>{title}</h2> */}
<h1 style={{fontSize:"44px"}}><Typewriter
  options={{
    strings: ['PAGE', 'LOADING...'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      </div>
    
</div>   
)
}
