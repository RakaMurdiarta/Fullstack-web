import React,{Component} from "react";

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state={fav:"red"}
        console.log('constructor');
    }

    componentDidMount(){
        
                this.setState({fav:'green'})
        
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
        document.getElementById("myupdate").innerHTML="this update "+ this.state.fav;
    }
    render() { 
        console.log('render');
        return (
            <>
                <h1>{this.state.fav}</h1>
                <div id="myupdate"></div>
            </>
            
         );
    }
}
 
export default LifeCycle;