
import { useState,useRef,useEffect } from "react";
//this is the sub footer component

function SubFooter(){


    // const [time, setTime] = useState('');
    const currentDate = new Date();
    const year = currentDate.getFullYear();


  //for time
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const date = new Date();
//       const Year = date.toDateString();
//       setTime(Year);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

    return(
        <footer className=""> 
        <div className="container">
          <div className="copyrights d-flex flex-row justify-content-between">
            <span>Designed and Developed with love and threejs</span>
            <p>© Shirish Shakya.<span className="dated">{year} </span></p>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    )
}
export default SubFooter;