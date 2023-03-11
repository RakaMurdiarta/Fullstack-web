import React from 'react'
import { useValue } from '../Contex'

const Show = () => {
    const { value } = useValue()
    const nilai=value
    return (
        <div>
            {nilai}
        </div>
    )
}

export default Show
