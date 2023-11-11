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
          <div className='itemWithChildren' onClick={handleToggle} >
            <span>{item.label}</span> {expanded ? '[-]' : '[+]'}
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
