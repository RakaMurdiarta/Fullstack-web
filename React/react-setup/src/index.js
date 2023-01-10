// import React from 'react'
import ReactDOM from 'react-dom/client';
import Logo from './Components/Logo/logo';
import "./index.css"
import Button from "./Components/Button/button"
import Text from './Components/Text/text';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <div className='container'>
            <div className='wrapper'>
                <Logo/>
                <Button/>
            </div>
            
        </div>
        <Text></Text>
    </div>
    
    
);