//this is the follow mouse cursor component


import Script from 'next/script'
import {useEffect} from 'react'
import React, { useRef,useState  } from "react";



function Dropdown(){

   

    return(
        <div style={{position:'relative'}}>
        <button className="btn btn-primary" id="works"> works <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg></button>
      <ul className='dropdown_menu'>
    
    <li><a className="dropdown_item" href="#">Action</a></li>
    <li><a className="dropdown_item" href="#">Another action</a></li>
    <li><a className="dropdown_item" href="#">Something else here</a></li>
    <li><a className="dropdown_item" href="#">Separated link</a></li>
  
      </ul>
      </div>
    )
}

export default Dropdown;