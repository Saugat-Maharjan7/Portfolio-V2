import Link from "next/link"

function head(){
    return(
        <header>
              <div className="container">
                <nav className="d-flex flex-row justify-content-between align-items-center">
                  <div className="Logo d-flex flex-row">
                    <div className="Logo-container" />
                    <span>SHIRISH.</span> 
                  </div>
                  <div className="links d-flex flex-row">
                    <ul className="navbar-nav me-auto d-flex flex-row">
                    <li className="nav-item d-flex flex-row ">
                    <Link className="anchor" href="about" id="about">about</Link>

                    </li>


                      {/* <li className="nav-item d-flex flex-row "><a className="anchor" href="#" id="about">about</a></li> */}
                      <li className="nav-item d-flex flex-row ">
                      <Link className="anchor" href="projects" id="works">Works</Link>
                        {/* <a className="anchor" href="#" id="works">work</a> */}
                        </li>
                      <li className="nav-item d-flex flex-row" id="contact"><a className="anchor" href="#" id="contact"><span id="contact">LET'S CONNECT</span><div id="contact" className="send-btn "><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                            </svg></div></a></li>                            
                    </ul>
                    <div className="ham-menu" style={{height: '3rem', width: '3rem'}}><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x={6} y={5} width={12} height={2} fill="#D9D9D9" />
                        <rect y={11} width={24} height={2} fill="#D9D9D9" />
                        <rect x={6} y={17} width={12} height={2} fill="#D9D9D9" />
                      </svg></div>
                  </div>  
                </nav>
              </div>
            </header>
    )
}

export default head;