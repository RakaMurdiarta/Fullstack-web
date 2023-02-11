import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetching = (url,filter) => {
    const [datawes, setData] = useState([])

    const fetchingData = async (url) => {
        await axios.post(url,filter).then((res) => {
            const { data } = res.data
            setData(data)
        })
    }

    useEffect(() => {
        fetchingData(url)
    }, [url])

    return [datawes]
}

export default Fetching