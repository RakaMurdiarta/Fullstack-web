import React, { useState } from "react";

function Motorbike2() {
    const [brand, setBrand] = useState('Honda')
    const [model, setModel] = useState('Vario')
    const [year, setYear] = useState('2022')
    const [color, setColor] = useState('red')

    const [owner, setOwner] = useState({
        name: "James Bond",
        nik: '12343535',
        address: 'J. Tukad Batanghari 55'
    });


    const UpdateAdress = () => {
        setOwner((previousState) => {
            return { ...previousState, name: 'Raka',address: 'Jl.Sunset Road' }
        })
    }

    return (
        <>
            <h1>Motorbike is {brand}</h1>
            <p>It is a {color} {model} from {year}</p>
            <hr />
            <h1>Owner : {brand}</h1>
            <p>Name : {owner.name}</p>
            <p>Nik : {owner.nik}</p>
            <p>Address : {owner.address}</p>
            <button onClick={UpdateAdress} type='button'> change Adress</button>
        </>
    );
}

export default Motorbike2;