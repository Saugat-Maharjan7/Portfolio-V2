import Image from 'next/image'
import { resolve } from 'styled-jsx/css'
import styles from '../styles/Home.module.css'
import work from"./work"


 function Home() {

  // await new Promise((resolve)=>{
  //   setTimeout(resolve,5000)
  // })

  return (
    <div className={styles.container}>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://scontent.xx.fbcdn.net/v/t1.15752-9/313273686_827503425189555_3207342809800637848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mtft8E-ZwkUAX9C4eAk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHQ8fYnEQ5DaG4H5No7212K8qluiamCzyTikBCNaWZ0Q&oe=6383DEDB" />
        <title>Shirish - The Design World</title>
        <link rel="icon" type="image/x-icon" href="https://scontent.xx.fbcdn.net/v/t1.15752-9/314541792_577870877351356_5957186771622315824_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u_olMuCmVgkAX_xU1GZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTVF-d0zRxLjMQRzXBxcGK7IkhNp2goY33AcADQ3vdOKw&oe=638F3735" />
        <link href="//db.onlinewebfonts.com/c/55d433372d270829c51e2577a78ef12d?family=Monument+Extended+Bold" rel="stylesheet" type="text/css" />
        {/* this is the script for time */}
        <style dangerouslySetInnerHTML={{__html: "\n\n        .box {\n        display: inline-block;\n        background:transparent;\n        background-size: cover;\n        }\n\n        .canvas {\n        background: transparent;\n        width: 100%;\n        }\n\n        " }} />
        <canvas className="webgl" />
        <div className="toggle-menu-section toggle-inactive">
          <div className="toggle-wrapper d-flex flex-column justify-content-between">
            <div className="toggle-header d-flex flex-row justify-content-between">
              <div className="Logo d-flex flex-row">
                <div className="Logo-container" />
                <h4>SHIRISH.</h4>
              </div>
              <button className="btn btn-icon close-ham">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z" />
                </svg>
              </button>
            </div>
            <ul className="nav-links d-flex flex-column">
              <li className="anchor" id="home"><a href={work} id="home">// Home </a></li>
              {work}
              <li className="anchor" id="about"><a href="#" id="about">// About</a></li>
              <li className="anchor" id="works"><a href="#" id="works">// Works</a></li>
              <li className="anchor" id="contact"><a href="#" id="contact">// Contact</a></li>
            </ul>
            <p>Copy Right shirish</p>
          </div>
        </div>
        <div className="mouse-cursor" />
        <main>
          
        </main>
      </div>
    </div>
  )
}

// export async function getServerSideProps(){
//   await new Promise((resolve)=>{
//     setTimeout(resolve,1000)
//   })
// }

Home.getInitialProps = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve;
    }, 1000);
  });
};

export default Home()