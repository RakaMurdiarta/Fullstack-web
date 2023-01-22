import React, { useState } from "react";
const stories = [
    {
        title: 'React',
        url: 'https://react.js.org/',
        author: 'Mr.X',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Mr.Y',
        num_comments: 2,
        points: 1,
        objectID: 1
    }
];

function ArrayFilter() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        // console.log(event.target.value);
    }
    // console.log('INI',searchTerm);
    // const searchFilter = stories.filter((story) => story.title.toLowerCase() === searchTerm.toLowerCase())
    const searchFilter = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

    // console.log(searchFilter);
    return (
        <div className="App">
            <Cari onSearch={handleSearch} />
            <h1>{searchTerm.toLowerCase()}</h1>
            <List list={searchFilter} />
            {/* <Clock name="Raka" />
        <ChangeState />
        <LifeCycle />
        <Search onSearch={handleSearch}/> */}
        </div>
    );
}
const Cari = (props) => {
    return (
        <>
            <label htmlFor="search">Search: </label>
            <input id='search' type="text" onChange={props.onSearch} />
        </>

    )
}
const List = (props) => {
    return (
        props.list.map((item) => (
            <div key={item.objectID}>
                <>Hasil Pencarian Anda : </>
                <span><a href={item.url}>{item.title}</a></span>
            </div>
        ))
    )
}

export default ArrayFilter;