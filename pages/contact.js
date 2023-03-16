import Script from 'next/script'
import { useEffect } from 'react';
import { useRef } from 'react';
// import "../styles/Custom_pages/Contactpage.scss"
// import profile from "../public/assets/videos/profile.mp4"
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import Link from "next/link";
import SubHead from "../public/components/subheader"





function Contact(){
    
    
    return(
        <>
        <m.div>
       
        {/* <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta property="og:image" content="https://i.ibb.co/gPk5DGs/Thumbnail.jpg" />
        <title>Shirish - Contact</title>
        <link rel="icon" type="image/x-icon" href="https://scontent.xx.fbcdn.net/v/t1.15752-9/314541792_577870877351356_5957186771622315824_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u_olMuCmVgkAX_xU1GZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTVF-d0zRxLjMQRzXBxcGK7IkhNp2goY33AcADQ3vdOKw&oe=638F3735" />
        
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
       
        <Mouse></Mouse>
        <SubHead></SubHead>
        <main>
          <footer>
            <div className="container">
              <div className="copyrights d-flex flex-row justify-content-between">
                <span>Designed and Developed with love and threejs</span>
                <p>© Shirish Shakya.<span className="dated"> </span></p>
                <span>All Rights Reserved</span>
              </div>
            </div>
          </footer>
        </main>
        </m.div>
        </>

        
    )

    
}
Contact.getInitialProps = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
          data: {
            title: 'Welcome to my website',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        });
    }, 4000);
  });
};
export default Contact;


