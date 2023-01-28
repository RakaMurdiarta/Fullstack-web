import React, { useContext } from 'react';
import { AppContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { links } from './data';
import  image  from './logo-kodak.jpg'

const Sidebar = () => {
  
  const { isSidebarOpen, CloseSidebar ,nama} = useContext(AppContext);
  console.log(nama);
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={image} className='logo' alt='koding akademi' />
        <button className='close-btn' onClick={CloseSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
