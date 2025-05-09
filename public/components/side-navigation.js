import Link from "next/link";
import SideNavItem  from './SideNavItem';
import menuItems from "../scripts/Datas/Navigation"




export default function Sidebar({ isSidebarOpen }) {

  const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
      <aside 

      className=

      {`toggle-menu-section ${ isSidebarOpen ? 'toggle-active' : 'toggle-inactive'}`}>
        {/* Sidebar content */}
                    
            <div className="toggle-wrapper d-flex flex-column justify-content-between   ">
                <ul className="nav-links d-flex flex-column " >
                
                    {/* <Link href="/about" id="about">
                    <li>// About</li>
                    </Link>
                
                    <Link href="/work" id="works">
                    <li>// Projects</li>
                    </Link>

                    <Link href="/contact" id="works">
                    <li>// Contact</li>
                    </Link> */}
                    {menuItems.map((item) => (
                    <SideNavItem key={item.id} item={item} />
                    ))}

               
                </ul>
                <div className="copyright">
                <p>
                    © Saugat Maharjan.<span className="dated">{year} </span>
                </p>
                <span className="copyright">All Rights Reserved</span>
                </div>
            </div>
            

      </aside>
    );
  }