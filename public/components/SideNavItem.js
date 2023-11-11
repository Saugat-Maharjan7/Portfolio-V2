import { useState } from 'react';
import menuItems from '../scripts/Datas/Navigation';
import Link from "next/link";

const SideNavItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <li className='d-flex flex-column '>
      {item.children ? (
        <>
          <div className='itemWithChildren d-flex flex-row justify-content-between align-items-center'  onClick={handleToggle} >
            <span>{item.label}</span> {expanded ? 
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64645 4.64645C7.84171 4.45118 8.15829 4.45118 8.35355 4.64645L14.3536 10.6464C14.5488 10.8417 14.5488 11.1583 14.3536 11.3536C14.1583 11.5488 13.8417 11.5488 13.6464 11.3536L8 5.70711L2.35355 11.3536C2.15829 11.5488 1.84171 11.5488 1.64645 11.3536C1.45118 11.1583 1.45118 10.8417 1.64645 10.6464L7.64645 4.64645Z" fill="white"/>
            </svg>
            
             : 
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="white"/>
            </svg>

             }
          </div>
          {expanded && (
            <ul>
              {item.children.map((child) => (
                <Link href={child.url} key={child.id}>{child.label}</Link>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div className='itemWithoutChildren' >{item.label}</div>
      )}
    </li>
  );
};

export default SideNavItem;
