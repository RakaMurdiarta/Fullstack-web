import React, { useState } from 'react'
import { useContact } from '../useContex/contactContex'

const Form = () => {
    const { dispatch } = useContact()
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')




    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "SUBMIT", payload: {
                fname,number,email
            }
        })
        setFname("")
        setEmail("")
        setNumber("")



    }
    return (
        <>
            <form onSubmit={onSubmit} className='max-w-[50rem] mx-auto gap-2 my-5 grid' >
                <h2><label htmlFor="fname">Fullname : </label></h2>
                <input value={fname} onChange={(e) => setFname(e.target.value)} className='focus:outline-none' type="text" id='fname' name='fname' />
                <h2><label htmlFor="email">Email : </label></h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none' type="email" id='email' name='email' />
                <h2><label htmlFor="number">Number Phone : </label></h2>
                <input value={number} onChange={(e) => setNumber(e.target.value)} className='focus:outline-none' type="text" id='number' name='number' />
                <button className='btn my-5' type='submit'>SUBMIT</button>
            </form>
        </>
    )
}

export default Form