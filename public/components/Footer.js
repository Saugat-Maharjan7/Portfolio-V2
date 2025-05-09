import SubFooter from "./subfooter";
// import IconButton from "./IconButton";
import Link from "next/link";
import Button from "./Button";

function Footer(){
    return(
        <footer className="BGBrandBlack500" style={{borderTop:'1px solid white'}}> 
        <div className="container">
          <div className="footer-wrapper d-flex flex-row justify-content-between">
            <div className="foot-content d-flex flex-column">
              <div className="footer-contents d-flex flex-column">
                <h1>READY TO COLLABORATE?</h1>
                <span>Lets hop on a meeting for your project.</span>
              </div>
              <div style={{width:'fit-content'}}  className="contact d-flex  flex-row ">
              <Link href="/contact" style={{textDecoration:"none"}}>
                <Button size="medium" 
                customButtonType="alternate" 
                      
                      label="message" 
                      rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                        </svg>
                      } 
                      />
                  </Link>
              </div>
              <ul style={{textDecoration:'none',listStyle:'none'}} className="contact d-flex flex-row GAPm PADDING0 " >
              <li ><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.linkedin.com/in/er-saugat-maharjan-471a86225">Linkedin</a></li>
                        <li ><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://dribbble.com/Saugat7">Dribbble</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.instagram.com/s.a.u.g.a.t_7/">Instagram</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' target="_blank" href="https://www.facebook.com/saugat.maharjan/">Facebook</a></li>
                      </ul>

            </div>
            {/* <div className="image-container position-relative">
              <img className="position-absolute astro" src="./../assets/astro.png" alt="astro" />
            </div> */}
          </div>
          
        </div>
        <SubFooter></SubFooter>
      </footer>
    )
}
export default Footer;