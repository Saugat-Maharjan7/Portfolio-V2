import Link from "next/link";
import Mouse from "../../public/components/Mouse"
import SubHead from "../../public/components/subheader"
import Head from "next/head";
import StarsCanvas from "../../public/components/StarsCanvas"
import Grain from "../../public/assets/textures/Grain.png"
import Image from "next/image";
import OrangeBall from "../../public/assets/textures/ORANGEBALL.png";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from "../../public/scripts/Datas/projects";
import ImageGravityCanvas from "../../public/components/ImageGravityCanvas"
import SubFooter from '../../public/components/subfooter';



function SuperKrishak(){


     // Find the project with id: 1
    const project = projects.find((project) => project.id === 1);
    const titleLetters = project.LeadingTitle.split('');


    const numSections = 5; // Define the number of sections you want to handle

    const lineControls = Array.from({ length: numSections }, () => useAnimation());
    const linerefs = Array.from({ length: numSections }, () => useInView({ threshold: 0.8 }));
    const lineInViews = linerefs.map(([, inView]) => inView);

    //ParallaxEffect

    useEffect(() => {
      const parallaxEffect = (event) => {
        const parallaxImages = document.querySelectorAll('.parallax-image');
        const deltaY = event.deltaY;
  
        parallaxImages.forEach((image) => {
          const speed = parseFloat(image.getAttribute('data-speed')) || 0.4; // Default speed if not specified
          image.style.transform = `translateY(${deltaY * speed}px)`;
        });
      };
  
      window.addEventListener('wheel', parallaxEffect);
  
      return () => {
        window.removeEventListener('wheel', parallaxEffect);
      };
    }, []);



    // Controls for text opacity animations
    const textControls = Array.from({ length: numSections }, () => useAnimation());
    const textrefs = Array.from({ length: numSections }, () => useRef());

  // Extract the first three images for left and the next three for right
  const leftImages1 = project.projectScreenShots.slice(0, 3);
  const rightImages1 = project.projectScreenShots.slice(3, 6);

   // Extract the first three images for left and the next three for right
   const leftImages2 = project.projectScreenShots.slice(6, 9);
   const rightImages2 = project.projectScreenShots.slice(9, 12);
    
    useEffect(() => {
        lineInViews.forEach((inView, index) => {
          if (inView) {
            lineControls[index].start({ width: '100%', transition: { duration: 1, ease: 'easeIn' } });
            textControls[index].start({ opacity: 1, transition: { duration: 1, ease: 'easeIn' } });
          } else {
            lineControls[index].start({ width: 0, transition: { duration: 1, ease: 'easeIn' } });
            textControls[index].start({ opacity: 0.5, transition: { duration: 1, ease: 'easeIn' } });
          }
        });
      }, [lineControls, textControls, lineInViews]);

     
   

    return(
        
        <div >
                    
        <Head>
            <title>Super Krishak</title>
        </Head>
            <Mouse></Mouse>
            <SubHead></SubHead>
            <StarsCanvas starColor="#AFFFE4" starSize={1.5} numStars={150}/>
            {/* <Image src={Grain} alt="Grain Texture" style={{width:'100%',height:'100%',position:'absolute',zIndex:3,mixBlendMode:'overlay',opacity:0.5,pointerEvents:'none'}}></Image> */}

            <main className="BGProjectsSuperKrishak100" style={{height:'100vh',width:'100%'}}>
            <section className="projectHero position-relative PBm " >
                <div className="projectContainer d-flex flex-column MTfxl GAPxxl">
                    <Image src={OrangeBall} className="position-absolute" priority={false} style={{right:0,top:"-100px",zIndex:0,pointerEvents:'none',opacity:0.8}} alt="OrangeBall"></Image>
                    <div className="d-flex flex-row MTxxl justify-content-between"> 
                    <h1 className="text-uppercase projectTitle ">{project.title }</h1>
                    <span className="projectYear">{project.finishedYear}</span>
                    </div>
                    
            <h1 className="projectLeadingTitle text-uppercase" >
                {titleLetters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
          
        >
          {letter}
        </motion.span>
      ))}
                </h1>
            <div className="d-flex justify-content-between projectRepsonibilityAndImage GAPl">
                <div className="d-flex flex-column GAPl projectResponsibility">
                    <p className="FONTNEXA ">My Responsibilities:</p>
                <ul className="d-flex flex-column GAPs"  style={{listStyle:'none',padding:0,margin:0}}>
                {project && project.responsibilities.map((responsibility, index) => (
                        <li className="projectResponsibilities FONTNEXA" key={index}>{responsibility}</li>
                    ))}
                    <li className="MTxl d-flex flex-wrap GAPs">
                        <Link target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.krishakapp&hl=en&gl=US&pli=1">
                        <svg
  width={220}
  height={82}
  viewBox="0 0 273 82"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_3013_1885)">
    <path
      d="M262.889 1.78184C267.54 1.78184 271.382 5.62406 271.382 10.2752V70.9418C271.382 75.5929 267.54 79.4352 262.889 79.4352H10.1111C5.46 79.4352 1.61778 75.5929 1.61778 70.9418V10.2752C1.61778 5.62406 5.46 1.78184 10.1111 1.78184H262.889ZM262.889 0.164062H10.1111C4.44889 0.164062 0 4.81517 0 10.2752V70.9418C0 76.6041 4.44889 81.0529 10.1111 81.0529H262.889C268.551 81.0529 273 76.6041 273 70.9418V10.2752C273 4.81517 268.551 0.164062 262.889 0.164062Z"
      fill="white"
    />
    <path
      d="M95.8531 20.7905C95.8531 22.4083 95.4486 23.8239 94.4375 24.835C93.2242 26.0483 91.8086 26.655 89.9886 26.655C88.1686 26.655 86.7531 26.0483 85.5397 24.835C84.3264 23.6216 83.7197 22.2061 83.7197 20.3861C83.7197 18.5661 84.3264 17.1505 85.5397 15.9372C86.7531 14.7239 88.1686 14.1172 89.9886 14.1172C90.7975 14.1172 91.6064 14.3194 92.4153 14.7239C93.2242 15.1283 93.8308 15.5327 94.2353 16.1394L93.2242 17.1505C92.4153 16.1394 91.4042 15.735 89.9886 15.735C88.7753 15.735 87.5619 16.1394 86.7531 17.1505C85.7419 17.9594 85.3375 19.1727 85.3375 20.5883C85.3375 22.0039 85.7419 23.2172 86.7531 24.0261C87.7642 24.835 88.7753 25.4416 89.9886 25.4416C91.4042 25.4416 92.4153 25.0372 93.4264 24.0261C94.0331 23.4194 94.4375 22.6105 94.4375 21.5994H89.9886V19.9816H95.8531V20.7905ZM105.155 15.735H99.6953V19.5772H104.751V20.9927H99.6953V24.835H105.155V26.4527H98.0775V14.3194H105.155V15.735ZM111.829 26.4527H110.211V15.735H106.773V14.3194H115.266V15.735H111.829V26.4527ZM121.131 26.4527V14.3194H122.749V26.4527H121.131ZM129.624 26.4527H128.006V15.735H124.569V14.3194H132.86V15.735H129.422V26.4527H129.624ZM148.835 24.835C147.622 26.0483 146.206 26.655 144.386 26.655C142.566 26.655 141.151 26.0483 139.937 24.835C138.724 23.6216 138.118 22.2061 138.118 20.3861C138.118 18.5661 138.724 17.1505 139.937 15.9372C141.151 14.7239 142.566 14.1172 144.386 14.1172C146.206 14.1172 147.622 14.7239 148.835 15.9372C150.049 17.1505 150.655 18.5661 150.655 20.3861C150.655 22.2061 150.049 23.6216 148.835 24.835ZM141.151 23.8239C141.96 24.6327 143.173 25.2394 144.386 25.2394C145.6 25.2394 146.813 24.835 147.622 23.8239C148.431 23.015 149.037 21.8016 149.037 20.3861C149.037 18.9705 148.633 17.7572 147.622 16.9483C146.813 16.1394 145.6 15.5327 144.386 15.5327C143.173 15.5327 141.96 15.9372 141.151 16.9483C140.342 17.7572 139.735 18.9705 139.735 20.3861C139.735 21.8016 140.14 23.015 141.151 23.8239ZM152.88 26.4527V14.3194H154.7L160.564 23.8239V14.3194H162.182V26.4527H160.564L154.295 16.5439V26.4527H152.88Z"
      fill="white"
      stroke="white"
      strokeWidth="0.404444"
      strokeMiterlimit={10}
    />
    <path
      d="M137.713 44.2486C132.86 44.2486 129.018 47.8886 129.018 52.9441C129.018 57.7975 132.86 61.6397 137.713 61.6397C142.567 61.6397 146.409 57.9997 146.409 52.9441C146.409 47.6864 142.567 44.2486 137.713 44.2486ZM137.713 57.9997C135.084 57.9997 132.86 55.7752 132.86 52.7419C132.86 49.7086 135.084 47.4841 137.713 47.4841C140.342 47.4841 142.567 49.5064 142.567 52.7419C142.567 55.7752 140.342 57.9997 137.713 57.9997ZM118.907 44.2486C114.053 44.2486 110.211 47.8886 110.211 52.9441C110.211 57.7975 114.053 61.6397 118.907 61.6397C123.76 61.6397 127.602 57.9997 127.602 52.9441C127.602 47.6864 123.76 44.2486 118.907 44.2486ZM118.907 57.9997C116.278 57.9997 114.053 55.7752 114.053 52.7419C114.053 49.7086 116.278 47.4841 118.907 47.4841C121.536 47.4841 123.76 49.5064 123.76 52.7419C123.76 55.7752 121.536 57.9997 118.907 57.9997ZM96.46 46.8775V50.5175H105.156C104.953 52.5397 104.144 54.1575 103.133 55.1686C101.92 56.3819 99.8977 57.7975 96.46 57.7975C91 57.7975 86.9555 53.5508 86.9555 48.0908C86.9555 42.6308 91.2022 38.3841 96.46 38.3841C99.2911 38.3841 101.516 39.5975 103.133 41.013L105.762 38.3841C103.538 36.3619 100.707 34.7441 96.6622 34.7441C89.3822 34.7441 83.1133 40.8108 83.1133 48.0908C83.1133 55.3708 89.3822 61.4375 96.6622 61.4375C100.707 61.4375 103.538 60.2241 105.964 57.5952C108.391 55.1686 109.2 51.7308 109.2 49.1019C109.2 48.293 109.2 47.4841 108.998 46.8775H96.46ZM188.269 49.7086C187.46 47.6864 185.438 44.2486 180.989 44.2486C176.54 44.2486 172.9 47.6864 172.9 52.9441C172.9 57.7975 176.54 61.6397 181.393 61.6397C185.235 61.6397 187.662 59.213 188.471 57.7975L185.64 55.7752C184.629 57.1908 183.415 58.2019 181.393 58.2019C179.371 58.2019 178.158 57.393 177.147 55.573L188.673 50.7197L188.269 49.7086ZM176.54 52.5397C176.54 49.3041 179.169 47.4841 180.989 47.4841C182.404 47.4841 183.82 48.293 184.224 49.3041L176.54 52.5397ZM167.035 60.8308H170.878V35.553H167.035V60.8308ZM160.969 46.0686C159.958 45.0575 158.34 44.0464 156.318 44.0464C152.071 44.0464 148.027 47.8886 148.027 52.7419C148.027 57.5952 151.869 61.2353 156.318 61.2353C158.34 61.2353 159.958 60.2241 160.767 59.213H160.969V60.4264C160.969 63.6619 159.149 65.4819 156.318 65.4819C154.093 65.4819 152.475 63.8641 152.071 62.4486L148.835 63.8641C149.847 66.0886 152.273 68.9197 156.52 68.9197C160.969 68.9197 164.609 66.2908 164.609 60.0219V44.653H160.969V46.0686ZM156.52 57.9997C153.891 57.9997 151.667 55.7752 151.667 52.7419C151.667 49.7086 153.891 47.4841 156.52 47.4841C159.149 47.4841 161.171 49.7086 161.171 52.7419C161.171 55.7752 159.149 57.9997 156.52 57.9997ZM205.862 35.553H196.762V60.8308H200.604V51.3264H205.862C210.109 51.3264 214.153 48.293 214.153 43.4397C214.153 38.5864 210.109 35.553 205.862 35.553ZM206.064 47.6864H200.604V38.9908H206.064C208.895 38.9908 210.513 41.4175 210.513 43.2375C210.311 45.4619 208.693 47.6864 206.064 47.6864ZM229.32 44.0464C226.489 44.0464 223.658 45.2597 222.647 47.8886L226.084 49.3041C226.893 47.8886 228.107 47.4841 229.522 47.4841C231.544 47.4841 233.364 48.6975 233.567 50.7197V50.9219C232.96 50.5175 231.342 49.9108 229.724 49.9108C226.084 49.9108 222.444 51.933 222.444 55.573C222.444 59.0108 225.478 61.2353 228.713 61.2353C231.342 61.2353 232.555 60.0219 233.567 58.8086H233.769V60.8308H237.409V51.1241C237.004 46.6753 233.567 44.0464 229.32 44.0464ZM228.915 57.9997C227.702 57.9997 225.882 57.393 225.882 55.7752C225.882 53.753 228.107 53.1464 229.927 53.1464C231.544 53.1464 232.353 53.5508 233.364 53.9553C232.96 56.3819 230.938 57.9997 228.915 57.9997ZM250.149 44.653L245.902 55.573H245.7L241.251 44.653H237.207L243.88 60.0219L240.038 68.5152H243.88L254.193 44.653H250.149ZM216.175 60.8308H220.018V35.553H216.175V60.8308Z"
      fill="white"
    />
    <path
      d="M21.0311 15.3306C20.4244 15.9372 20.2222 16.9483 20.2222 18.1617V62.8528C20.2222 64.0661 20.6266 65.0772 21.2333 65.6839L21.4355 65.8861L46.5111 40.8106V40.4061L21.0311 15.3306Z"
      fill="#B3B3B3"
    />
    <path
      d="M54.6002 49.3041L46.3091 41.013V40.4063L54.6002 32.1152L54.8024 32.3175L64.7113 37.9797C67.5424 39.5975 67.5424 42.2263 64.7113 43.8441L54.6002 49.3041Z"
      fill="#B3B3B3"
    />
    <path
      d="M54.8024 49.1017L46.309 40.6084L21.0312 65.8862C22.0424 66.8973 23.4579 66.8973 25.2779 66.0884L54.8024 49.1017Z"
      fill="#808080"
    />
    <path
      d="M54.8024 32.1152L25.2779 15.3308C23.4579 14.3197 22.0424 14.5219 21.0312 15.533L46.309 40.6086L54.8024 32.1152Z"
      fill="#E6E6E6"
    />
    <path
      opacity="0.2"
      d="M54.6001 48.8994L25.2779 65.4816C23.6601 66.4927 22.2446 66.2905 21.2335 65.4816L21.0312 65.6839L21.2335 65.8861C22.2446 66.695 23.6601 66.8972 25.2779 65.8861L54.6001 48.8994Z"
      fill="white"
    />
    <path
      opacity="0.12"
      d="M21.0311 65.4817C20.4244 64.8751 20.2222 63.864 20.2222 62.6506V62.8528C20.2222 64.0662 20.6266 65.0773 21.2333 65.684V65.4817H21.0311ZM64.7111 43.2373L54.5999 48.8995L54.8022 49.1017L64.7111 43.4395C66.1266 42.6306 66.7333 41.6195 66.7333 40.6084C66.7333 41.6195 65.9244 42.4284 64.7111 43.2373Z"
      fill="white"
    />
    <path
      opacity="0.25"
      d="M25.2777 15.5329L64.7111 37.9795C65.9244 38.7884 66.7333 39.5973 66.7333 40.6084C66.7333 39.5973 66.1266 38.5862 64.7111 37.7773L25.2777 15.3306C22.4466 13.7129 20.2222 14.9262 20.2222 18.1618V18.364C20.2222 15.3306 22.4466 13.9151 25.2777 15.5329Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_3013_1885">
      <rect width={273} height="81.2175" fill="white" />
    </clipPath>
  </defs>
</svg>
                                            
                      </Link>
                      
                        <Image src={project.LogoLink} width={172} height={88} alt="project Logo"></Image>
                    </li>
                     </ul></div>
                
                     <div className="projectHeroImage">
                     <Image src={project.projectImageLink} alt="Project Image" width={800} height={400} />
                     </div>
            </div>
            

            </div>
            
            </section>
            
            <section className="projectContent">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl">
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">
                <motion.div
              className="topLine"
              ref={linerefs[0][0]}
              initial={{ width: 0 }}
              animate={lineControls[0]}
            ></motion.div>
                    <span className="FONTMONUMENT SIZEF16">01</span>
                    <h3 className="FONTNEXA">{project.projectOverview.Headline}</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 className="SIZEF12">
                    CHALLENGE
                    </h4>
                    <p className=" FONTNEXA SIZEF10">{project.projectOverview.Challenge}</p>
                </div>
                <div className="projectInfo d-flex GAPm">
                <h4 className="SIZEF12">
                        APPROACH
                </h4>
                    <p className=" FONTNEXA SIZEF10">{project.projectOverview.Approach}</p>                
                    </div>
                    </div>
            </section>
            <section className="MTfxl PBfxl projectContent">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl">
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">

                <motion.div
              className="topLine"
              ref={linerefs[1][0]}
              initial={{ width: 0 }}
              animate={lineControls[1]}
            ></motion.div>
                    <span className="FONTMONUMENT SIZEF16">02</span>
                    <h3 className="FONTNEXA">{project.projectVision.Headline}</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 className="SIZEF12 ">
                    {project.projectVision.Title}
                    </h4>
                    
                    <p className=" FONTNEXA SIZEF10">{project.projectVision.Info}</p>
                </div>
                
                    <div className="projectBanner" style={{height:'auto',overflow:'hidden'}}>
                    <Image src={project.projectBannerImage}

                    alt="Project Banner"
                    width={1000} // Set an appropriate width
                    height={465}
                    layout="responsive"
                    className="parallax-image"
                    data-speed="0.2" // Speed of parallax effect
                     style={{ transform: 'translateY(0)' ,transition:'ease-in-out 0.5s all'}}
                    ></Image>
                     
                    </div>
                    <div className="d-flex projectFirstScreenShotsSection position-relative GAPfxl MTfxl PTfxl">
                        <div className="projectInfo d-flex flex-column GAPm" style={{height:'fit-content'}}>
                            <h4 className="SIZEF12 w-100">
                            {project.projectFirstScreenshots.Title}
                            </h4>
                            <p className=" FONTNEXA SIZEF10 w-100"> {project.projectFirstScreenshots.Info}</p>
                        </div>
                        <div className="projectFirstScreenshots  d-flex GAPxxl" >
                            <div className="firstLeftScreenshots GAPxxl d-flex flex-column">
                            {leftImages1.map((image, index) => (
                                        <img key={index} src={image} alt={`Image ${index}`} />
                                    ))}
                            </div>
                            <div className="firstRightScreenshots GAPxxl d-flex flex-column">
                                {rightImages1.map((image, index) => (
                                    <img key={index} src={image} alt={`Image ${index + 3}`} />
                                ))}
                            </div>
                        </div>
                </div>
                    </div>
            </section>
            <section className="MTfxl PBfxl projectContent">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl">
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">

                <motion.div
              className="topLine"
              ref={linerefs[2][0]}
              initial={{ width: 0 }}
              animate={lineControls[2]}
            ></motion.div>
                    <span className="FONTMONUMENT SIZEF16">03</span>
                    <h3 className="FONTNEXA">{project.projectFeatures[0].Headline}</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 className="SIZEF12 w-50">
                    {project.projectFeatures[0].Title}
                    </h4>
                    
                    <p className=" FONTNEXA SIZEF10">{project.projectFeatures[0].Info}</p>
                </div>
                
                    <div className="projectBanner" style={{height:'auto', overflow:'hidden'}}>
                    <Image src={project.projectFeatures[0].ImageLink}

                    alt="Project Banner"
                    width={1000} // Set an appropriate width
                    height={814}
                    layout="responsive"
                    className="parallax-image"
                    data-speed="0.2" // Speed of parallax effect
                    style={{ transform: 'translateY(0)' ,transition:'ease-in-out 0.5s all'}}
                    ></Image>
                    </div>
                    <div className="d-flex projectFirstScreenShotsSection position-relative GAPfxl MTfxl PTfxl">
                        <div className="projectInfo d-flex flex-column GAPm" style={{height:'fit-content'}}>
                            <h4 className="SIZEF12 w-100">
                            {project.projectSecondScreenshots.Title}
                            </h4>
                            <p className=" FONTNEXA SIZEF10 w-100">{project.projectSecondScreenshots.Info}</p>
                        </div>
                        <div className="projectFirstScreenshots  d-flex GAPxxl" >
                            <div className="firstLeftScreenshots GAPxxl d-flex flex-column">
                            {leftImages2.map((image, index) => (
                                        <img key={index} src={image} alt={`Image ${index}`} />
                                    ))}
                            </div>
                            <div className="firstRightScreenshots GAPxxl d-flex flex-column">
                                {rightImages2.map((image, index) => (
                                    <img key={index} src={image} alt={`Image ${index + 3}`} />
                                ))}
                            </div>
                        </div>
                </div>
                    </div>
            </section>
            <section className="MTfxl PBfxl projectContent">
            <div className="projectContainer d-flex flex-column MTxl GAPxxl "            >
                <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">

                <motion.div
              className="topLine"
              ref={linerefs[3][0]}
              initial={{ width: 0 }}
              animate={lineControls[3]}
            ></motion.div>
                    <span className="FONTMONUMENT SIZEF16">04</span>
                    <h3 className="FONTNEXA">{project.projectResearch.Headline}</h3>
                </div>
                <div className="projectInfo d-flex GAPm">
                    <h4 className="SIZEF12 ">
                    {project.projectResearch.Title} </h4>
                    
                    <p className=" FONTNEXA SIZEF10">{project.projectResearch.Info}</p>
                </div>
                <div className="projectBanner" style={{height:'auto', overflow:'hidden'}}>
                    <Image src={project.projectResearch.BannerLink}

                    alt="Project Banner"
                    width={1000} // Set an appropriate width
                    height={814}
                    layout="responsive"
                    className="parallax-image"
                    data-speed="0.2" // Speed of parallax effect
                    style={{ transform: 'translateY(0)' ,transition:'ease-in-out 0.5s all'}}
                    ></Image>
                    </div>
                <div className="researchMethods d-flex flex-column GAPxxxl">
                    <div className="projectInfo d-flex GAPm MTfxl">
                        <h5 className="SIZEF12 ">
                        {project.projectResearch.projectMethods[0].methodName} </h5>
                        
                        <div className=" FONTNEXA SIZEF10 d-flex flex-column GAPxl ">
                          <p className=" FONTNEXA SIZEF10">{project.projectResearch.projectMethods[0].methodInfo}</p>
                          <Image src={project.projectResearch.projectMethods[0].methodImageLink}
                          alt="Method Banner"
                          width={1000} // Set an appropriate width
                          height={814}
                          layout="responsive"
                          ></Image>
                        </div>
                   </div>

                   <div className="projectInfo d-flex GAPm ">
                        <h5 className="SIZEF12 ">
                        {project.projectResearch.projectMethods[1].methodName} </h5>
                        
                        <div className=" FONTNEXA SIZEF10 d-flex flex-column GAPxl ">
                          <p className=" FONTNEXA SIZEF10">{project.projectResearch.projectMethods[1].methodInfo}</p>
                          <Image src={project.projectResearch.projectMethods[1].methodImageLink}
                          alt="Method Banner"
                          width={1000} // Set an appropriate width
                          height={814}
                          layout="responsive"
                          ></Image>
                        </div>
                   </div>
                   <div className="projectInfo d-flex GAPm ">
                        <h5 className="SIZEF12 ">
                        {project.projectResearch.projectMethods[2].methodName} </h5>
                        
                        <div className=" FONTNEXA SIZEF10 d-flex flex-column GAPxl ">
                          <p className=" FONTNEXA SIZEF10">{project.projectResearch.projectMethods[2].methodInfo}</p>
                          <Image src={project.projectResearch.projectMethods[2].methodImageLink}
                          alt="Method Banner"
                          width={1000} // Set an appropriate width
                          height={814}
                          layout="responsive"
                          ></Image>
                        </div>
                   </div>
                   </div>       
                    <div className="projectBanner" style={{height:'auto',overflow:'hidden'}}>
                    </div>
                    </div>
            </section>
            <section className="MTfxl PBfxl projectContent position-relative " >
              <div className="projectContainer d-flex flex-column MTxl GAPxxl projectResult " >
                  <div className="projectSectionHeader align-items-center GAPm d-flex flex-row ">

                  <motion.div
                className="topLine"
                ref={linerefs[4][0]}
                initial={{ width: 0 }}
                animate={lineControls[4]}
              ></motion.div>
                      <span className="FONTMONUMENT SIZEF16">05</span>
                      <h3 className="FONTNEXA">The Result</h3>
                  </div>
                  <div className="projectInfo d-flex GAPm">
                      <h4 className="SIZEF12 ">
                      EMPOWERING FARMERS AND STUDENTS: INSIGHTS FROM SUPERKRISHAK USER RESEARCH</h4>
                      
                      <p className=" FONTNEXA SIZEF10">The user research conducted on the SuperKrishak app yielded profound insights beneficial to both farmers and students. For farmers, it identified preferred features, addressed challenges, and tailored content to seamlessly integrate into their daily agricultural activities. Simultaneously, for students, the research optimized learning content, increased engagement factors, improved accessibility, and aligned the app's offerings with academic needs. Uncovering shared needs allowed for usability enhancements and ensured relevant, valuable content for both user groups. These insights led to significant improvements, enhancing user engagement, satisfaction, and the overall utility of the app among farmers and students.</p>
                  </div>
                  <div className="projectInfo d-flex GAPm">
                      <h4 className="SIZEF12 ">
                      THE NUMBERS</h4>
                      
                      <div className=" FONTNEXA SIZEF10 d-flex flex-wrap GAPxl">
                        <div className="d-flex flex-row GAPl align-items-center">
                          <div style={{height:'80px',width:'80px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="">
  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
</svg></div>
                        

                          <div className="d-flex flex-column GAPxs position-relative">
                            <div className="d-flex flex-row GAPxs align-items-center" style={{position:'absolute',top:'-20px',right:'40px',borderRadius:'56px',width:'fit-content',padding:'4px 12px',backgroundColor:'#4BD20B',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-arrow-up-short"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                              />
                            </svg>
                            20.4%</div>
                            <span className="FONTMONUMENT SIZEF26 d-flex" style={{fontWeight: 800}}>61.4%</span>
                            <p className="FONTNEXA w-100">Users now used app more than once in a day</p>
                          </div>   
                          </div>
                          <div className="d-flex flex-row GAPl align-items-center">
                          <div style={{height:'80px',width:'80px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg></div>
                          


                          <div className="d-flex flex-column GAPxs position-relative">
                            <div className="d-flex flex-row GAPxs align-items-center"  style={{position:'absolute',top:'-20px',right:'40px',borderRadius:'56px',width:'fit-content',padding:'4px 12px',backgroundColor:'#4BD20B',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-arrow-up-short"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                              />
                            </svg> 14.25%</div>
                            <span className="FONTMONUMENT SIZEF26" style={{fontWeight: 800}}>55.9%</span>
                            <p className="FONTNEXA w-100">Users now have no problems at all using the app</p>
                          </div>
                          </div>  
                          <div className="d-flex flex-row GAPl align-items-center">
                          <div style={{height:'80px',width:'80px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
</svg></div>

                          
                          <div className="d-flex flex-column GAPxs position-relative">
                            <span className="FONTMONUMENT SIZEF26" style={{fontWeight: 800,width:'100%'}}>72.8%</span>
                            <p className="FONTNEXA w-100">Users are now satisfied and very satisfied respectively</p>
                          </div> 
                          </div> 
                          <div className="d-flex flex-row GAPl align-items-center">
                          <div style={{height:'80px',width:'80px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>
</div>
                          <div className="d-flex flex-column GAPxs position-relative">
                            <div className="d-flex flex-row GAPxs align-items-center" style={{position:'absolute',top:'-20px',right:'10px',borderRadius:'56px',width:'fit-content',padding:'4px 12px',backgroundColor:'#4BD20B',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="currentColor"
                              className="bi bi-arrow-up-short"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                              />
                            </svg>
                            44.8%</div>
                            <span className="FONTMONUMENT SIZEF26 d-flex flex-row GAPl align-items-center" style={{fontWeight: 800}}>10K+ 
                               
                            </span>
                            <p className="FONTNEXA w-100">Users have downloaded the app</p>
                          </div> 
                          </div>    
                      </div>
                  </div>
                  
                  </div>
                  <ImageGravityCanvas  />
            </section>
            <SubFooter/>

            </main>
        
        
        </div>
    )
}



export default SuperKrishak;