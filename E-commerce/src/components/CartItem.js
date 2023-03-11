import React, { Fragment } from 'react'
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
        <Fragment>
            <div className='grid grid-cols-grid-product gap-4 place-items-center'>
                <div className='grid h-full grid-cols-2 gap-4 place-items-start items-center'>
                    <img
                        src={image}
                        alt={name}
                        className='object-cover h-full rounded-md w-full'
                    />
                    <div className='grid gap-1'>
                        <div className='font-bold text-[20px]'>{name}</div>
                        <p className='flex items-center gap-2'>
                            Color :
                            <span
                                className='w-[1rem] h-[1rem] rounded-md'
                                style={{ background: `${color}` }}
                            ></span>
                        </p>
                    </div>
                </div>
                <h2>{formatPrice(price)}</h2>
                <AmountButtons
                    decrease={decrease}
                    increase={increase}
                    amount={amount}
                />
                <div>
                    <h2>{formatPrice(price * amount)}</h2>
                </div>
                <button
                    className='cursor-pointer bg-red-600 rounded-sm'
                    onClick={() => removeItem(id)}
                >
                    <FaTrash className='text-[20px] text-[white]' />
                </button>
            </div>
        </Fragment>
    )
}

export default CartItem
