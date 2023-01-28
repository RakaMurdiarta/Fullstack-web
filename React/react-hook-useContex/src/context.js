import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {


  //start
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nama, setNama] = useState('hai')




  function SidebarOpen() {
    setIsSidebarOpen(true)
    setNama('hehe')
    console.log(nama);
  }
  function CloseSidebar() {
    setIsSidebarOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }
  function modalClose() {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, SidebarOpen, CloseSidebar, isModalOpen, openModal, modalClose, nama }}
    >
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider };
