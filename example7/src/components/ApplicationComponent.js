
//ApplicationComponent.js

import React from 'react';
import SquareFader from './SquareFader';

class ApplicationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibile: false
        };
    }

    toggleVisibility() {
        this.state.visible = !this.state.visible;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>Toggle Visibility</button>
                <SquareFader visible={this.state.visible} />
            </div>
        );
    }
}

export default ApplicationComponent;