
import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import "../styles/style.scss"
// import "./scripts/script"
// import "./scripts/navigation";
// import "./scripts/Mouseenter";
// import "./scripts/exceldatabase"
// import "./scripts/BGeraser";


function MyApp({ Component, pageProps }) {

  const laoding=useRouter();
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  const handleStart=(url)=>(url !== router.asPath) && setLoading(true);
  const handleComplete=(url)=>(url == router.asPath) && setTimeout(()=>{setLoading(false)},5000);

  router.events.on('routerChangeStart',handleStart)
  router.events.on('routerChangeComplete',handleComplete)
  router.events.on('routerChangeError',handleComplete)

return()=>{
  router.events.off('routerChangeStart',handleStart)
  router.events.off('routerChangeComplete',handleComplete)
  router.events.off('routerChangeError',handleComplete)
}
})


  const router=useRouter();
  return( 
    <AnimatePresence mode="wait">
  <motion.div 
    // key={}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration:3
      }}
      variants={{initialState:{
        opacity:0
      },
      animateState:{
        opacity:1

      },
      exitState:{
        opacity:0

      }
}}
  className='Base-page' ><div className='loader'></div>  <Component {...pageProps} />
</motion.div>
  </AnimatePresence>
  )
  
}

export default MyApp  
