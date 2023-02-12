import React from 'react'
import { useBookStore } from './store'

const Zustand = () => {
    const Amount = useBookStore((state) => state.amount)
    const UpdateAmount = useBookStore((state) => state.updateAmount)
    return (
        <>
            <div>{Amount}</div>
            <button onClick={() => (UpdateAmount(30))}>Click Me</button>
        </>

    )
}

export default Zustand