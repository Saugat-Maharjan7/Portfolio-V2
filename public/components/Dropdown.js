import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../scripts/Datas/projects';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
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
    <div style={{ position: 'relative' }}>
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="btn btn-down"
        id="works"
        transition={{ duration: 0.2 }}
      >
        projects
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

      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={isOpen ? { opacity: 1, height: 'auto', overflow: 'visible' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className='dropdown_menu'>
          {projects.map((item) => (
            <Link href={item.link} key={item.id} className='dropdown_item'>
              {item.title}
            </Link>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Dropdown;
