import React, { useState, useEffect } from 'react'

const useDataFetching = (dataSource) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetcHingData() {
            try {
                const data = await fetch(dataSource);
                const result = await data.json();
                console.log(result);

                if (result) { //tidak ada kondisi??
                    setData(result);
                    setLoading(false)
                }
            } catch (e) {
                setLoading(false)
                setError(e.message)
            }
        }
        fetcHingData();
    },[dataSource]) 
    console.log('From Hooks Folder usedatafetching',data);
    return [loading,error,data]
}

export default useDataFetching