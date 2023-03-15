import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router';
// import Router from "next/router"




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
    <div className='projectContent d-flex justify-content-start align-items-end'>
      {/* <h2>{title}</h2> */}
<h1 style={{fontSize:"164px"}}>LOADING</h1>
      </div>
    
</div>   
)
}
