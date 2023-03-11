import React from 'react'
import { useParams } from 'react-router-dom'

const SingleContact = () => {

    const { id } = useParams()
    console.log('haha', id);
    return (
        <>
            <div>{id}</div>

        </>

    )
}

export default SingleContact