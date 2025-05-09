import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Dropdown({dropName,links}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const dropButtonRef = document.getElementById('dropButton'); // Change the ID to 'dropButton'
      if (
        dropdownRef.current &&
        dropButtonRef &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== dropButtonRef &&
        !dropButtonRef.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('mouseup', handleOutsideClick);
  
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('mouseup', handleOutsideClick);
    };
  }, []);
  
  

  useEffect(() => {
    let scrollable = document.querySelector('main');
    
    scrollable.addEventListener('scroll', () => {
      let t = scrollable.scrollTop;
      if (t > 0) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div style={{ position: 'relative',fontFamily:'Nexa Light',height:'fit-content' }}>
      <motion.button
      style={{textDecoration:'none',textTransform:'uppercase'}}
        onClick={() => setIsOpen(prev => !prev)}
        className="btn btn-down"
        id="dropButton"
        transition={{ duration: 0.2 }}
      >
        {dropName}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d={isOpen ? "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" : "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}
          />
        </svg>
      </motion.button>

      
        <motion.ul
        style={{zIndex:1000}}
        ref={dropdownRef}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto'} : { opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className='dropdown_menu'>
          {links}
          
        
      </motion.ul>
    </div>
  );
}

export default Dropdown;
