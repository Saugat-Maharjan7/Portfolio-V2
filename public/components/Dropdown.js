//this is the follow mouse cursor component


import Script from 'next/script'
import {useEffect} from 'react'
import React, { useRef,useState  } from "react";
// import Menu from './menu';
import Link from "next/link";


function Dropdown(){

  
      const menuitems=[    {
        id:1,
        "title":"Super Krishak",
        "link":'/projects'
      },
      {
        id:2,
        "title":"VRS",
        "link":'/projects'
      },
      {
        id:3,
        "title":"ABC",
        "link":'/projects'
      }]


   const [isOpen,setIsOpen]=useState(false)

    return(

      
        <div style={{position:'relative'}}>
        
        <button 
        onClick={()=>setIsOpen((prev)=>!prev)}

        className="btn btn-down" 
        
        id="works"> 
        projects

        {isOpen &&(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
         )}

        {!isOpen &&(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
         )}
        
      </button>
     
     {isOpen &&(
      <div>
        
          <ul className='dropdown_menu'>
            {menuitems.map(item=>(
                 <Link href={item.link} key={item.id} className='dropdown_item'>{item.title}</Link>
            ))}
            </ul>
       
      </div>
     )}
      </div>
    )
}

export default Dropdown;