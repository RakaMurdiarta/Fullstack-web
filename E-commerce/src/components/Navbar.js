import React from 'react'
import logo from '../assets/cek-toko-sebelah.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import './navbar.css'
import { FaShoppingCart } from 'react-icons/fa'
const Nav = () => {
    const { openSidebar, products } = useProductsContext()
    const { myUser } = useUserContext()
    console.log({ products })
    return (
        <div className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <a href='/'>
                        <img src={logo} alt='cek-toko-sebelah' />
                    </a>
                    <button onClick={openSidebar} className='nav-toggle'>
                        <div className='text-[20px]'>
                            <FaBars />
                        </div>
                    </button>
                </div>
                <ul className='nav-links'>
                    {links.map((set) => (
                        <li key={set.id}>
                            <Link to={set.url}>{set.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className='show'>
                    <CartButtons />
                </div>
            </div>
        </div>
    )
}

export default Nav
