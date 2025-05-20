import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/style.scss';
import '../styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
 
  


  return (
    <AnimatePresence mode='wait'>
              <Analytics />

              <SpeedInsights />

     
        
        <Component {...pageProps} />
    
    </AnimatePresence>
  );
}

export default MyApp;
