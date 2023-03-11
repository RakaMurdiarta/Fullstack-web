import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
const CartItems = () => {
    const { cart, clearCart } = useCartContext()
    console.log('dad', cart)

    return (
        <div className='container mx-auto'>
            <CartColumns />
            {cart.map((item) => {
                const { id, name, image, price, amount, color } = item
                return (
                    <div className='my-14'>
                        <CartItem
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            price={price}
                            amount={amount}
                            color={color}
                        />
                    </div>
                )
            })}
            <div className='flex justify-between text-[white] my-10 font-bold'>
                <button
                    type='button'
                    className='w-fit p-5 uppercase bg-[#AB7A5F] rounded-xl'
                >
                    <Link to='/products'>Continue Shopping</Link>
                </button>

                <button
                    onClick={clearCart}
                    type='button'
                    className='w-fit uppercase  p-5 bg-[black] rounded-xl'
                >
                    Clear Shopping Cart
                </button>
            </div>
            <CartTotals />
        </div>
    )
}

export default CartItems
