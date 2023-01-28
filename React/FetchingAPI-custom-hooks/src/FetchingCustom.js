import React, { useEffect, useState } from 'react'

const FetchingCustom = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchdata() {
            const data = await fetch(url)
            const result = await data.json();
            setData(result)
        }
        // fetch(url)
        // .then((response)=>response.json())
        // .then((result)=>{
        //     setData(result)
        // })
        fetchdata()
    }, [url])
    return [data]
}
export default FetchingCustom
// jsonplaceholder.typicode.com/todos