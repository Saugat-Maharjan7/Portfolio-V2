import Link from "next/link"

function Toggle(){
    return(
    <div className="toggle-menu-section toggle-inactive">
    <div className="toggle-wrapper d-flex flex-column justify-content-between">
      <div className="toggle-header d-flex flex-row justify-content-between">
        <div className="Logo d-flex flex-row">
          <div className="Logo-container" />
          <span>SHIRISH.</span>
        </div>
        <button className="btn btn-icon close-ham">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z" />
          </svg>
        </button>
      </div>
      <ul className="nav-links d-flex flex-column">
        <li className="anchor" id="home"><a href="#" id="home">// Home </a></li>
        <li className="anchor" id="about"><a href="#" id="about">// About</a></li>
        <li className="anchor" id="works"><Link href="projects" id="works">// Works</Link></li>
        <li className="anchor" id="contact"><a href="#" id="contact">// Contact</a></li>
      </ul>
      <p>Copy Right shirish</p>
    </div>
  </div>
    )
}

export default Toggle;