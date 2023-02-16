import React from 'react'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    return (
        <div className='flex'>
            <div className='flex'>
                <img src={image} alt={name} />
                <div className='grid'>
                    <h1>{name}</h1>
                    <h2>Color : <p className={`bg-[${color}] rounded-full`}></p></h2>
                </div>
            </div>
            <h2>
              {formatPrice(price)}
            </h2>
            <AmountButtons decrease={decrease} increase={increase} amount={amount}/>
            <div className='flex justify-between'>
            <h2>
              {formatPrice(price*amount)}
            </h2>
            <FaTrash className='text-[20px]'/>
            </div>
        </div>
    )
}

export default CartItem
