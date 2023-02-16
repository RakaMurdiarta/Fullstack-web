import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    
  }
  if (action.type === REMOVE_CART_ITEM) {
   
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    
  }
  if (action.type === CLEAR_CART) {
    
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_items: 0, total_amount: 0 }
    )
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
