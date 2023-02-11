import React, { useState } from 'react'
import logo from '../image/logo.jpg'

const Navbar = ({ counter, handleSubmit, handleSearch }) => {

    // const klik=()=>{
    //     setCounter((prev)=>prev+1)
    // }
    return (
        <nav className="navbar bg-dark bg-body-light fixed-top">
            <div className="container-fluid mx-5">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand">
                        <img className='logo' src={logo} width={'80'} alt="" />
                    </a>
                    <h4 className='text-white'>M<span className='text-danger fs-2'>L</span>an<span className='text-danger fs-2'>J</span>o</h4>
                </div>

                <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-center align-items-center mx-4" role="search">
                        <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search Menus" aria-label="Search" />
                        <button onClick={handleSubmit} className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                    <i className='fa fa-shopping-cart cart'><span className='badge bg-danger'>{counter}</span></i>
                </div>

            </div>
        </nav>


    )
}

export default Navbar