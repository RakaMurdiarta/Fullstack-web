import React, { useEffect, useState } from "react";

const Message = () => {
    const [message, setMessage] = useState('Hi State Awal')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('trigger')
        setCounter((counter)=>counter+1)

    })
    return(
        <h1>{counter}</h1>
    )
}
export default Message;

