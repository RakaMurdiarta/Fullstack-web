import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cart/modal";
import CartItem from "./CartItem";

const CartComponents = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <>
        <section className="">
          <header>
            <h2>Your Bag</h2>
            <h4>is Currently Empty</h4>
          </header>
        </section>
      </>
    );
  }

  return (
    <section>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h4>Total</h4>
          <span>${total.toFixed(2)}</span>
        </div>
        <button onClick={() => dispatch(openModal())}> clearCart</button>
      </footer>
    </section>
  )
};

export default CartComponents;
