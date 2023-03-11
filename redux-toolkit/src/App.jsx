import Navbar from "./components/Navbar";
import CartComponents from "./components/CartComponents";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";



const App = () => {
  const { isLoading, cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems('random'))
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <main>
      {console.log({isOpen})}
      <Navbar />
      <CartComponents />
    </main>
  )
}

export default App
