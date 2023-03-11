import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import './cartButton.css'

const CartButton = () => {
    const { closeSidebar } = useProductsContext()
    const { total_items, clearCart } = useCartContext()
    const { loginWithRedirect, myUser, logout } = useUserContext()
    console.log({ logout, myUser })
    return (
        <>
            <div className='flex justify-center items-center gap-10  text-[20px]'>
                <div className='flex justify-center items-center gap-2'>
                    Cart
                    <Link to='/cart' className='flex'>
                        <div className='relative flex justify-center items-center'>
                            <FaShoppingCart />
                            <div className='badge'>
                                <span>{total_items}</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center items-center'>
                    {myUser ? (
                        <>
                            {myUser.name}
                            <button onClick={logout} className='flex relative'>
                                <FaUserMinus />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={loginWithRedirect}
                                className='flex relative gap-2'
                            >
                                Login
                                <div>
                                    <FaUserPlus />
                                </div>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default CartButton
