
import '../styles/globals.css';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import "../styles/style.scss";
import Head from "../public/components/header"
import Router from "next/router"


import Pagetransition from "../public/components/page-transition"
// import "./scripts/script"
// import "./scripts/navigation";
// import "./scripts/Mouseenter";
// import "./scripts/exceldatabase"
// import "./scripts/BGeraser";


function MyApp({ Component, pageProps }) {
const router=useRouter()

useEffect(()=>{
  Router.events.on('routeChangeStart',(url)=>{
    document.querySelector('.page-transition').classList.add('loader-active')
    document.querySelector('.load-bar').classList.add('load-bar-active')


  })

  Router.events.on("routeChangeComplete",(url)=>{
    document.querySelector('.page-transition').classList.remove('loader-active')
    document.querySelector('.load-bar').classList.remove('load-bar-active')

  })

 

})

  return( 
  <motion.div 

className='Base-page' >
      <Pagetransition/>
    <Component {...pageProps}
    // onLoaded={() => setLoaded(true)} 
    />
</motion.div>
  )
  return ()=>clearTimeout(timer)

}

export default MyApp  
