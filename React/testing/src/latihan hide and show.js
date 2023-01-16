import React, { useState } from "react"
import './App.css';

const Tampil = () => {
    const [show, setShow] = useState(true)
    console.log(show)


    return (
        <div className="App">

            {show ? <h1>Show Haii</h1> : <h1>Hide Haii</h1>}
            <button onClick={() => setShow(!show)}>click me</button>

        </div>
    )
}

export default Tampil;