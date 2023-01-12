import React, { Component } from 'react';

class Message extends Component {
    // state = {  } 
    render() { 
        return (
            <h1>Message : {this.props.message}</h1>
        );
    }
}
 
export default Message;