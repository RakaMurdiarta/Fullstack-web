import React from "react";
import logo from "./logo.svg"

function Header(){
    // return <img src={logo} alt="Logo"/>
    return(<div>
        <h2>{process.env.REACT_APP_WEBSITE_NAME}</h2>
        <img src={process.env.PUBLIC_URL+ "/logo192.png"}/>
    </div>)
}
export default Header;