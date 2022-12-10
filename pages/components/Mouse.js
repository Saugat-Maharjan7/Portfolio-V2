//this is the follow mouse cursor component


import Script from 'next/script'
import {useEffect} from 'react'
import React, { useRef,useState  } from "react";



function Mouse(){

    useEffect(()=>{
        let cursor=document.querySelector('.mouse-cursor')

        window.addEventListener(('mousemove'),(e)=>{

            cursor.style.top=e.pageY + (-10) +'px';
            cursor.style.left=e.pageX + (-10) +'px';

        })
    })

    return(
        <>
                <div className="mouse-cursor"/>
        </>
    )
}

export default Mouse;