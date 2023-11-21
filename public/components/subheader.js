import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router';

function Subhead() {
  const [showNav, setShowNav] = useState(false);
  const [startY, setStartY] = useState(0);
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigates to the previous page
  };
  useEffect(() => {

    //For the scroll swipe

    const handleScroll = (event) => {

      if (event.deltaY > 0) {

        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

//For the touch swipe

    const handleStart = (event) => {
      setStartY(event.touches ? event.touches[0].clientY : event.clientY);

    };

    const handleMove = (event) => {
      const currentY = event.touches ? event.touches[0].clientY : event.clientY;
      const deltaY = currentY - startY;

      setShowNav(deltaY < 0); // Show nav if deltaY is negative (scrolling/swiping up)
    };

    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchstart", handleStart);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener('wheel', handleScroll);

    };
    
  }, [startY]);

  return (
    <m.nav
      className={`subHeader ${showNav ? '' : 'header-visible'}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Link     onClick={handleGoBack}
 className="Logo d-flex flex-row align-items-center justify-content-center" style={{ textDecoration: "none", color: "white" }} href="/" id="home">
            <div className="d-flex flex-row align-items-center justify-content-center btn-contain"  >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </div><span>Back</span>
          </Link>

          <div className="links d-flex flex-row">
{/* This is empty */}
          </div>
        </div>
      </div>
    </m.nav>
  );
}

export default Subhead;
