import React from 'react';


function Car(props) {
    return (
        <h2>Mobil Merk : {props.brand.name}</h2>
    )
}
function Garage() {
    const carInfo = { name: 'Honda', model: 'CRV' }
    return (
        <>
            <h1>Mobil saya</h1>
            <Car brand={carInfo} />
        </>
    );
}

const stories = [
    {
        title: 'React',
        url: 'https://redux.js.org',
        author: 'Mr.X',
        num_comments: 3,
        objecId:0
    },
    {
        title: 'React',
        url: 'https://redux.js.org',
        author: 'Mr.X',
        num_comments: 3,
        objecId:1
    }
]
const List=(props)=>{
    return(
        <ul>
            {props.list.map((item)=>(
                <li key={item.objectId}>
                    <span><a href={item.url}>{item.title}</a></span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                </li>
            ))}
        </ul>
    )
}

function Stories() {
    return (  
        <List list={stories}/>
    );
}

export {Stories,Garage};