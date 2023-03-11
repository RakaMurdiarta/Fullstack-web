import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (

        <nav>
            <ul style={{ display: 'flex', gap: '20px' }}>
                <NavLink activeClassName="selected" className='none' to='/' >Home</NavLink>
                <NavLink className='none' to='/about' >About</NavLink>
                <NavLink
                    className='none'
                    isActive={(match, location) => {
                        console.log(match);
                    }}
                    to='/contact' >
                    Contact
                </NavLink>
            </ul>
        </nav>

    )
}

export default Navbar