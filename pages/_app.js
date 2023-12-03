import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/style.scss';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoadProgress = () => {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      const totalLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

      const progress = Math.round((loadTime / totalLoadTime) * 100);
      setLoadingProgress(progress);
    };

    window.addEventListener('load', () => {
      setIsLoading(false);
    });

    window.addEventListener('DOMContentLoaded', handleLoadProgress);

    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoadProgress);
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="loader-wrapper">
          <div>
            <img src="/assets/rocketslow.gif" alt="Rocket GIF" />
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between">
                <p>Initiating Launch</p>
                <p>{`${loadingProgress}%`}</p>
              </div>

              <div className="load-bar">
                <div className="load-fill" style={{ width: `${loadingProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
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
    </div>
  );
}

export default MyApp;
