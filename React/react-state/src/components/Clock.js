import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        console.log(this.state.date)
    }
    render() {
        return (
            <>  <h2>Halooo, {this.props.name}</h2>
                <h1>It is : {this.state.date.toLocaleTimeString()}</h1>
            </>
        )

    }
}
// Using Class in state like this

export default Clock;