import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
const CartItems = () => {
  const { cart, clearCart } = useCartContext()
  console.log('dad',cart);
  const {id,name,image,price,amount}=cart

  return (
    <div>
      <CartColumns />
      <CartItem id={cart.id} />
    </div>
  )
}

export default CartItems
