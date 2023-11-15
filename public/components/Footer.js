import SubFooter from "./subfooter";
import IconButton from "./IconButton";
import Link from "next/link";

function Footer(){
    return(
        <footer className="BGBrandBlack500"> 
        <div className="container">
          <div className="footer-wrapper d-flex flex-row justify-content-between">
            <div className="foot-content d-flex flex-column">
              <div className="footer-contents d-flex flex-column">
                <h1>RETURNING HOME ALREADY?</h1>
                <span>We can still keep in touch though...</span>
              </div>
              <div style={{width:'fit-content'}}  className="contact d-flex  flex-row ">
                <div  className="d-flex flex-row GAPm align-items-center ">
                <span className="SIZEF8 TXTTailwindGray400">Leave a Message: </span>
                <Link href="/contact" style={{textDecoration:"none"}}>
                  <IconButton icon={
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-dots" viewBox="0 0 16 16">
                   <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                   <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                 </svg>
                  }/>
                  </Link>
                  </div>
              </div>
              <ul style={{textDecoration:'none',listStyle:'none'}} className="contact d-flex flex-row GAPm PADDING0 " >
                        <li ><a className='TXTBrandOrange500 SIZEF6' href="https://www.linkedin.com/in/shirish-shakya-ba8a49200/">Linkedin</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a className='TXTBrandOrange500 SIZEF6' href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
                      </ul>

            </div>
            <div className="image-container position-relative">
              <img className="position-absolute astro" src="./../assets/astro.png" alt="astro" />
            </div>
          </div>
          
        </div>
        <SubFooter></SubFooter>
      </footer>
    )
}
export default Footer;