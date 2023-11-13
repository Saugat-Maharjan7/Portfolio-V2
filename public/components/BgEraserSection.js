

import {useEffect} from 'react'
import React, { useRef,useState  } from "react";


// {/* <a href="https://ibb.co/myyCStq"><img src="https://i.ibb.co/FYYbnJw/tap.png" alt="tap" border="0"></a> */}

// var touchtips=document.querySelector('.tips')
// var url = 'https://i.ibb.co/FYYbnJw/tap.png';
// var refernce=document.querySelector('.designs-grid-container')
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var img = new Image();
// var cursor= document.querySelector('.mouse-cursor')

// img.src = url;
// img.onload = function () {
// //   var width = Math.min(500, img.width);
// //   var height = img.height * (width / img.width);
// var width=refernce.clientWidth;
// var height=refernce.clientHeight;

//   canvas.width = width;
//   canvas.height = height;
//   ctx.drawImage(img, 0, 0, width, height);
// };

// var isPress = false;
// var old = null;


// canvas.addEventListener('touchstart',function (e){
//     isPress = true;
//     old = {x: e.offsetX*3, y: e.offsetY*3};
// })

// // canvas.addEventListener('touchmove',function (e){
// //     if (isPress) {
// //         var x = e.offsetX;
// //         var y = e.offsetY;
// //         ctx.globalCompositeOperation = 'destination-out';
    
// //         ctx.beginPath();
// //         ctx.arc(100, y, 50, 100, 100 * Math.PI);
// //         ctx.fill();
    
// //         ctx.lineWidth = 20;
// //         ctx.beginPath();
// //         ctx.moveTo(old.x, old.y);
// //         ctx.lineTo(x, y);
// //         ctx.stroke(50);
    
// //         old = {x: x, y: y};
    
// //       }
// // })

// // canvas.addEventListener('touchend', function (e){
// //     isPress = false;
// //   });

// canvas.addEventListener('mouseenter',()=>{
//     cursor.classList.add("mouse-cursor-brush");
// })

// canvas.addEventListener('mousedown', function (e){
//   isPress = true;
//   old = {x: e.offsetX, y: e.offsetY};
//   touchtips.style.opacity=0
// });
// canvas.addEventListener('mousemove', function (e){
//   if (isPress) {
//     var x = e.offsetX;
//     var y = e.offsetY;
//     ctx.globalCompositeOperation = 'destination-out';

//     ctx.beginPath();
//     ctx.arc(x, y, 100, 0, 2 * Math.PI);
//     ctx.fill();

//     ctx.lineWidth = 20;
//     ctx.beginPath();
//     ctx.moveTo(old.x, old.y);
//     ctx.lineTo(x, y);
//     ctx.stroke();

//     old = {x: x, y: y};

//   }
// });
// canvas.addEventListener('mouseleave', function (e){
//   isPress = false;
//   cursor.classList.remove("mouse-cursor-brush");

// });
   

function BGERASER(){

    useEffect(()=>{
       
    })

    return(
        <>
                <section className="section-visual-designs" id="visual-designs">
            <div className="container">
              <div className="border-l-r-b d-flex flex-row container-title">
                <div className="container-header-img">
                  <img style={{width:"75px",transform:"scale(2.5) translateY(2px)"}}  src="https://i.ibb.co/3d1pzkP/moon2-1.png" alt="moon" />
                </div>
                <div className=" container-header d-flex align-items-center" >
                  <h2 className="secton-header-h2">VISUAL DESIGNS</h2>
                  <span className="leader-subtitle">.THE MOON</span>
                </div>
              </div>
            </div>
            <div className="container d-flex flex-column " style={{justifyContent: 'center'}}>
              <div className="border-l-r-b w-100 visual-designcontainer">
                <div >
                  <p className="section-details TXTTailwindGray400">
                    Visual Designs are the key fundamental for strong designs in any medium whether it be on paper or screen. It has always been supporting creativity and a fun thing to play around.
                  </p>
                </div>
              </div> 
              <div className="designs-grid-container position-relative" style={{overflow: 'hidden'}}>
                <div className="tips position-absolute">
                  <h5>Tip:</h5>
                  <p>Somethings just need a TAP for magic to happen</p>
                </div>
                <div className="eraseable-content position-relative">
                  <div className="box" style={{overflow: 'hidden'}}>
                    <canvas id="canvas" />
                  </div>
                  <div className="designs-grid" style={{pointerEvents: 'none'}}>
                    <div className="design " id="design-0"><img src="https://i.ibb.co/r4ZHkfC/valentine-choclate-1.png" alt="choclate" /></div>
                    <div className="design" id="design-1"><img src="https://i.ibb.co/fq9t1X9/Booklet.png" alt="Booklet design" /></div>
                    <div className="design" id="design-2"><img src="https://i.ibb.co/tMGvw5P/Basanta.png" alt="Basanta poster" /></div>
                    <div className="design" id="design-3"><img src="https://i.ibb.co/Kz3MLg6/nft.png" alt="NFT" /></div>
                    <div className="design" id="design-4"><img src="https://i.ibb.co/pn8gBW8/Posters.png" alt="company posters" /></div>
                  </div>
                </div>
              </div>               
            </div>
          </section>
        </>
    )
}

export default BGERASER;