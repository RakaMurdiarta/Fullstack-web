import React, { useEffect, useState } from 'react'
import { useValue } from '../Contex'
import { useBearStore } from '../store'


const FormInput = () => {
    const { value, times2, set_values, kuadrat, bagi } = useValue()
    const val = useBearStore((state) => state.value)
    const setVal = useBearStore((state) => state.setValue)





    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timeout called!');
        }, 1000);
        return () => clearTimeout(timer);
    }, [value])
    return (
        <div className='grid'>
            <input onChange={(e) => setVal(e.target.value)} className='border' type="text" />
            <div className='grid'>
                <button onClick={() => set_values(val)}>SET</button>
                <button onClick={times2} className=''>Times 2</button>
                <button onClick={kuadrat} className=''>Kuadrat</button>
                <button onClick={bagi} className=''>Bagi 2</button>
            </div>
        </div>
    )
}

export default FormInput
