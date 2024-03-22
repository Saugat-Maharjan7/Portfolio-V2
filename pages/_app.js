import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import '../styles/style.scss';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 25; // Increase the progress by 25% every 1 second
        } else {
          setIsLoading(false); // Set isLoading to false when loading is complete
          return 100;
        }
      });
    }, 1000); // 1 second interval

    // Preload banner image
    const img = new Image();
    img.src = "/assets/websitebanner.jpg";
    img.onload = () => {
      setIsBannerLoaded(true); // Set isBannerLoaded to true when the image is loaded
    };

    return () => clearInterval(timer);
  }, []);

  // Render loader if still loading or banner image is not loaded yet
  if (isLoading || !isBannerLoaded) {
    return (
      <div className="loader-wrapper">
        <div>
          <img style={{ mixBlendMode: 'lighten' }} src="/assets/loom.gif" alt="Rocket GIF" />
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-row justify-content-between">
              <p>Loading</p>
              <p>{`${loadingProgress}%`}</p>
            </div>
            <div className="load-bar">
              <div className="load-fill" style={{ width: `${loadingProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render content once loaded
  return (
    <AnimatePresence mode="wait">
      <Head>
        <meta property="og:image" content="/assets/websitebanner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Analytics />
      <motion.div key={router.pathname} className="Base-page">
        {/* Page Transition */}
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <Component {...pageProps} />
        {/* Page Transition */}
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
