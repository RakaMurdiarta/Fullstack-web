import React, { useState } from "react";


const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        // console.log(event.target.value)
        onSearch(event)
        setSearchTerm(event.target.value)
        // // console.log(event.target.value);
        // // console.log('hai');
        // props.onSearch(event)//kalo tidak ada event kenapa error
        // //Kenapa pakai props?, tujuannya apa?
    }
    return (
        <>
            <label htmlFor="search">Serach : </label>
            <input type="text" id='search' onChange={handleChange} />
            <div>Serach for : {searchTerm}</div>
        </>
    )
}

export default Search;
