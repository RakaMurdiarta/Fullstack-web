import React from 'react'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link, useNavigate } from 'react-router-dom'
const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext()
    const { myUser, loginWithRedirect } = useUserContext()
    console.log({ total_amount })
    console.log({ shipping_fee })

    const navigate = useNavigate()

    return (
        <div className='flex justify-end my-10'>
            <div>
                <div className='border border-slate-800 px-14 py-8 my-2 grid gap-3'>
                    <div className='font-bold'>
                        <p className='grid grid-cols-grid-total'>
                            Subtotal :<span>{formatPrice(total_amount)}</span>
                        </p>
                        <p className='grid grid-cols-grid-total'>
                            <span>Shipping Fee : </span>
                            <span>{formatPrice(shipping_fee)}</span>
                        </p>
                    </div>
                    <hr />
                    <div className='grid grid-cols-grid-total text-[28px]'>
                        Order Total :
                        <span>{formatPrice(total_amount + shipping_fee)}</span>
                    </div>
                </div>
                {myUser ? (
                    <button
                        onClick={() => navigate('/')}
                        className='text-white w-full p-5 uppercase bg-[#252525] transition-all ease-out duration-300 hover:bg-[#AB7A5F] rounded-sm'
                    >
                        Pay
                    </button>
                ) : (
                    <button
                        onClick={loginWithRedirect}
                        className='text-white w-full p-5 uppercase bg-[#252525] transition-all ease-out duration-300 hover:bg-[#AB7A5F] rounded-sm'
                    >
                        login
                    </button>
                )}
            </div>
        </div>
    )
}

export default CartTotals
