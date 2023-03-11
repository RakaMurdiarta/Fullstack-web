import React from "react";
import { useDispatch } from "react-redux";
import { removeItems, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <button onClick={() => dispatch(removeItems(id))}>remove</button>
      </div>
      <div>
        <button onClick={() => dispatch(increase({ id }))}>increase</button>
        <p>{amount}</p>
      </div>
    </article>
  );
};

export default CartItem;
