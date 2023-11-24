
import '../styles/globals.css';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import "../styles/style.scss";
import Head from "../public/components/header"
import Router from "next/router"






function MyApp({ Component, pageProps }) {
const router=useRouter()


  return( 
    <AnimatePresence mode='wait'>
      
  <motion.div key={router.pathname} 

className='Base-page' >
      {/* <Pagetransition/> */}
      <Component {...pageProps}/>
{/* Page Transition */}
      <motion.div 
      className='slide-in'
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1,ease:[0.22,1,0.36,1]}}
      >
      </motion.div>
      <motion.div 
      className='slide-out'
      initial={{scaleY:1}}
      animate={{scaleY:0}}
      exit={{scaleY:0}}
      transition={{duration:1,ease:[0.22,1,0.36,1]}}
      >
      </motion.div>
</motion.div>
</AnimatePresence>
  )
  return ()=>clearTimeout(timer)

}

export default MyApp  
