import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchExample = () => {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
    const number = searchParams.get('n')
    return (
        <div>
            <h1 className='text-emerald-300'>{number}</h1>
            <input type="number" value={number} onChange={(e) => setSearchParams({ n: e.target.value })} />
            
        </div>
    )
}

export default SearchExample