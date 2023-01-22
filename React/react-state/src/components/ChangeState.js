import React, { Component } from 'react';

class ChangeState extends Component{
    constructor(){
        super();
        this.state={brand:'Yamaha'}
    }

    changeValue(){
        this.setState({brand:"Suzuki"})
    }

    render(){
        return(
            <>
            <h1>{this.state.brand}</h1>
            <button onClick={()=>this.changeValue()}>Click Me</button></>
            
        )
    }
}

export default ChangeState;
