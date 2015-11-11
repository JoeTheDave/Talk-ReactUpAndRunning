
//FormField.js

import React from 'react';
import {findDOMNode} from 'React-dom';

class FormField extends React.Component{
    constructor (props) {
        super(props);
    }

    componentDidMount() {
    	$(findDOMNode(this)).find('input').mask(this.props.mask)
    }

    render() {
        return (
            <div className="form-field">
            	<label>{this.props.label}</label><br />
            	<input />
            </div>
        );
    }
}

FormField.propTypes = {
    label: React.PropTypes.string.isRequired,
    mask: React.PropTypes.string.isRequired
};

export default FormField;