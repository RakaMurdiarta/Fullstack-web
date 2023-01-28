import React,  { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

const Modal = () => {
  const {isModalOpen,modalClose}=useContext(AppContext)
  console.log(isModalOpen);

  return (
    <div
      //CSS modal: modal-overlay show-modal
      className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <div className='modal-container'>
        <h3>Peringatan Modal</h3>
        <p>Apakah anda yakin akan menghapus ini ?</p>
        <button className='close-modal-btn' onClick={modalClose}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
