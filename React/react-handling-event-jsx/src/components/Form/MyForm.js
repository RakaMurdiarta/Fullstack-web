import React, { Component } from 'react';

class myForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleSubmit(event) {
        alert('Your Favorite is : ' + this.state.value)
        event.preventDefault();
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Pick your favourite Flavor:
                    <select name="" id="" value={this.state.value} onChange={this.handleChange}>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>

                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default myForm;