
//SubComponent.js

import React from 'react';

class SubComponent extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
    	let buttonText = '(' + this.props.text + ')'
        return (
            <button onClick={this.props.handler}>{buttonText}</button>
        );
    }
}

export default SubComponent;