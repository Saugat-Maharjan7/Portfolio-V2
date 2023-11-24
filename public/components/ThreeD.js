import { useRef,useEffect } from 'react';


function ThreeD(){
  const porscheVideoref=useRef();

  useEffect(()=>{
    porscheVideoref.current.play()

  })

    return(
      
        <section>
      

        <div className="container">
          <div className="border-l-r-b d-flex flex-row container-title">
            <div className=" container-header d-flex align-items-center" >
              <h2 className="secton-header-h2">3D WORKS</h2>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column " style={{justifyContent: 'center'}}>
          <div className="border-l-r-b w-100 threedwork-container">
            <div className="">
            {/* phidden class */}
              <p className=" section-details TXTTailwindGray400">
                Visual Designs are the key fundamental for strong designs in any medium whether it be on paper or screen. It has always been supporting creativity and a fun thing to play around.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid models">
          <div className="models-container d-flex flex-column">
            <div className="model-row1 d-flex flex-row">
              <div className="threeD " id="threeD-0"><img src="https://i.ibb.co/yVmq85q/iron-man.png" alt="Iron Man" /></div>
              <div className="threeD" id="threeD-1"><img src="https://i.ibb.co/cwtbd4y/omnitrix.png" alt="Omnitrix" /></div>
              <div className="threeD" id="threeD-2">
                <video className="threeDvideo" src="../assets/videos/horsenft.mp4" id="nft" autoPlay loop muted > 
                </video></div>
              <div className="threeD" id="threeD-3"><img src="https://i.ibb.co/RBzCRfD/PSG.png" alt="PSG" /></div>
              <div className="threeD invisible" id="threeD-0" />
            </div>
            <div className="model-row2 d-flex flex-row ">
              <div className="threeD invisible" id="threeD-0" />
              <div className="threeD " id="threeD-0"><img src="https://i.ibb.co/ZNyMWQh/logistics.png" alt="Iron Man" /></div>
              <div className="threeD" id="threeD-2">
              <video ref={porscheVideoref} className="threeDvideo" src="../assets/videos/car.mp4" id="nft" loop muted /> 
              </div>
              <div className="threeD" id="threeD-1"><img src="https://i.ibb.co/C1Ddcps/clonexself.png" alt="Omnitrix" /></div>
              <div className="threeD" id="threeD-3"><img src="https://i.ibb.co/xStFcCQ/arcreactor.png" alt="PSG" /></div>
              <div className="threeD invisible" id="threeD-0" />
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default ThreeD;