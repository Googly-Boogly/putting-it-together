import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: parseInt(this.props.age)
        };
    }
    addOne = () => {
        // console.log(this.state.age)
        this.setState({age: this.state.age += 1})
        // console.log(this.state.age)
    }
    // (age) = this.props
    render() {
        return         <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>{this.state.age}</p>
            <p>{this.props.hairColor}</p>
            <button onClick={this.addOne}>Birthday!</button>

        </div>
        
        ;
    }
}
    
export default SomeClassComponent;