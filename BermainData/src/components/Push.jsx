import React from 'react'
import Fetching from '../hooks/Fetching'

const Push = () => {

    const [datawes] = Fetching(`https://countriesnow.space/api/v0.1/countries/population/cities/filter`, {
        "limit": 3,
        "order": "asc",
        "orderBy": "name",
        "country": "nigeria"
    })

    console.log(datawes);

    const pull=[]
    datawes.map((set)=>{
        
        return pull.push({
            city:set.city,
            population:set.populationCounts
        })
    })

    console.log(pull);
    return (
        <div>
                a

        </div>
    )
}

export default Push