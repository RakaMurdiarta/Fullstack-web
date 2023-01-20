import React from "react";

function YellowBr(props) {
    return (
        <div style={{border:`10px solid ${props.color}`}}>
            {props.children}
        </div>
    );
}

export default YellowBr;