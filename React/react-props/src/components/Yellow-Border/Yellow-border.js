import React from "react";
import Header from "../Header/Header";
function YellowBr(props) {
    return (
        <div style={{border:`10px solid ${props.color}`}}>
            <Header/>
        </div>
    );
}

export default YellowBr;