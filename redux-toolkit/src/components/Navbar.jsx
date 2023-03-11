import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log({ amount });
  return (
    <>
      <nav>
        <div>
          <span>Shopping Cart With Redux</span>
        </div>
        <div>
          <div>
            <p>{amount}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
