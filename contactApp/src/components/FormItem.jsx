import React from 'react'
import { useContact } from '../useContex/contactContex'
import './card.css'
const FormItem = () => {
    const { user } = useContact()
    return (
        <>
            <div className='bg-[#645cff] p-[0.75rem] text-white shadow-lg max-w-[50rem] mx-auto'>
                <h1>LIST CONTACT</h1>
            </div>

            <div className="max-w-[50rem] mx-auto my-5 grid gap-3 grid-cols-3">
                {
                    user.length<1 ? <div className='container mx-auto'><h1>Empty</h1></div> : user.map((item, index) => {
                        const { fname, number, email } = item
                        return (
                            <div key={index} className="card p-2">
                                <h1>{fname}</h1>
                                <p className="title">{email}</p>
                                <p>{number}</p>
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                                <p><button>Contact</button></p>
                            </div>
                        )
                    })
                }
            </div>
        </>


    )
}

export default FormItem