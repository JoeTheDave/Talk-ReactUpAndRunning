
//TopLevelComponent.js

import React from 'react';
import SubComponent from './SubComponent';

class TopLevelComponent extends React.Component{
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.state.count++;
        this.setState(this.state);
    }

    decrement() {
        this.state.count--;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <SubComponent handler={this.increment} text={"increment"} />
                <SubComponent handler={this.decrement} text={"decrement"} />
            </div>
        );
    }
}

export default TopLevelComponent;