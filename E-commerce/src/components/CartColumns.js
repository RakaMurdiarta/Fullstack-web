import React from 'react'
const CartColumns = () => {
    return (
        <>
            <div className='grid grid-cols-custom-grid gap-4 place-items-center text-[grey] font-semibold'>
                <h5>Item</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Subtotal</h5>
            </div>
            <hr className='my-12'/>
        </>
    )
}

export default CartColumns
