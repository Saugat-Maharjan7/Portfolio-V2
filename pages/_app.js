import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 25; // Increase the progress by 10% every 1 second
        } else {
          setIsLoading(false);
          return 100;
        }
      });
    }, 1000); // 1 second interval

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div>
          <img src="/assets/rocketslow.gif" alt="Rocket GIF" />
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-row justify-content-between"><p>Initiating Launch</p>
            <p>{`${loadingProgress}%`}</p></div>
            
            <div className="load-bar">
              <div className="load-fill" style={{ width: `${loadingProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
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
