import React from 'react'
import { CartIcon } from '../icons'
import { useContact } from '../useContex/contactContex'

const Header = () => {

    return (
        <>
            <nav className='max-w-[50rem] mx-auto'>
                <div className='nav-center'>
                    <h1 className='text-[white] font-bold text-[25px]'>ADD CONTACT</h1>
                    <div className='nav-container'>
                        <CartIcon />
                        <div className='amount-container'>
                            <p className='total-amount'>d</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header