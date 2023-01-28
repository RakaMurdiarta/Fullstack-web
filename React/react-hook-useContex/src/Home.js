import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {

  const {SidebarOpen,openModal}=useContext(AppContext)
  
  
  return (
    <main>
      <button onClick={SidebarOpen} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show confirmation modal
      </button>
    </main>
  );
};

export default Home;
  