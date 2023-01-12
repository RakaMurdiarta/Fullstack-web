import { Component } from "react";

class State extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };

    }
    tambah() {
        this.setState({
            counter:this.state.counter +1,
        });
    }
    kurang(){
        
        this.setState({
            counter:this.state.counter-1,
            
        })
    }
    
    render() {
        return (
            <div>
                <h3>Counter : {this.state.counter}</h3>
                <button onClick={() => this.tambah()}>Tambah</button>
                <button onClick={() => this.kurang()}>Kurang</button>
            </div>

        )
 
    }
}

export default State; 
