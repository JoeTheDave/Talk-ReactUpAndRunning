
//SubComponent.js

import React from 'react';

class SubComponent extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.handler}>{this.props.text}</button>
        );
    }
}

export default SubComponent;