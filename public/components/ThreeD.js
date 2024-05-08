import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


function ThreeD(){
  const porscheVideoref=useRef();
  const modelRow1Ref = useRef();
  const modelRow2Ref = useRef();
  useEffect(()=>{
    porscheVideoref.current.play()

  })
 
    return(
      
        <section className='threeDsection'>
      

        <div className="container">
          <div style={{borderTop:'1px solid white'}} className="border-l-r-b d-flex flex-row container-title">
            <div className=" container-header d-flex align-items-center" >
              <h2 className="secton-header-h2">3D AND ANIMATION</h2>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column " style={{justifyContent: 'center'}}>
          <div className="border-l-r-b w-100 threedwork-container">
            <div className="">
            {/* phidden class */}
              <p className=" section-details ">
              In my design toolbox, 3D modeling and animation work wonders. They let me craft lifelike 3D visuals and bring them to motion, turning static designs into dynamic, engaging experiences. These tools breathe life into ideas, adding depth and interactivity that captivate audiences in exciting ways.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid models">
          <div className="models-container d-flex flex-column">
            <div className="model-row1 d-flex flex-row" ref={modelRow1Ref}>
              <div className="threeD " id="threeD-0"><img src="https://i.ibb.co/yVmq85q/iron-man.png" alt="Iron Man" /></div>
              <div className="threeD" id="threeD-1"><img src="https://i.ibb.co/cwtbd4y/omnitrix.png" alt="Omnitrix" /></div>
              <div className="threeD" id="threeD-2">
                <video className="threeDvideo" src="../assets/videos/horsenft.mp4" id="nft" autoPlay playsInline  loop muted > 
                </video></div>
              <div className="threeD" id="threeD-3"><img src="https://i.ibb.co/RBzCRfD/PSG.png" alt="PSG" /></div>
            </div>
            <div className="model-row2 d-flex flex-row " ref={modelRow2Ref}>
              <div className="threeD " id="threeD-0"><img src="https://i.ibb.co/ZNyMWQh/logistics.png" alt="Iron Man" /></div>
              <div className="threeD" id="threeD-2">
              <video ref={porscheVideoref} className="threeDvideo" src="../assets/videos/car.mp4" id="porsche" autoPlay playsInline  loop muted /> 
              </div>
              <div className="threeD" id="threeD-1"><img src="https://i.ibb.co/C1Ddcps/clonexself.png" alt="Omnitrix" /></div>
              <div className="threeD" id="threeD-3"><img src="https://i.ibb.co/xStFcCQ/arcreactor.png" alt="PSG" /></div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default ThreeD;

