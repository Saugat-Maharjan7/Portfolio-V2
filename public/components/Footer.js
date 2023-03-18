import SubFooter from "./subfooter";

function Footer(){
    return(
        <footer> 
        <div className="container">
          <div className="footer-wrapper d-flex flex-row justify-content-between">
            <div className="foot-content d-flex flex-column">
              <div className="footer-contents d-flex flex-column">
                <h1>RETURNING HOME ALREADY?</h1>
                <span>We can still keep in touch though...</span>
              </div>
              <div className="contact d-flex flex-column">
                <p>shirish.shakya5@gmail.com</p>
                <span>+977-9869134750</span>
              </div>
            </div>
            <div className="image-container position-relative">
              {/* <a href="https://ibb.co/dmjh5nL"><img src="https://i.ibb.co/wcBvzDw/astro.png" alt="astro" border="0"></a> */}
              <img className="position-absolute astro" src="https://i.ibb.co/wcBvzDw/astro.png" alt="astro" />
            </div>
          </div>
          
        </div>
        <SubFooter></SubFooter>
      </footer>
    )
}
export default Footer;