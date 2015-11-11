
//SquareFader.js

import React from 'react';
import {findDOMNode} from 'React-dom';

class SquareFader extends React.Component{
    constructor (props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        if (nextProps.visible) {
            $(findDOMNode(this)).stop( true, true ).fadeIn('slow');
        } else {
            $(findDOMNode(this)).stop( true, true ).fadeOut('slow');
        }
      }
    }

    render() {
        return (
            <div className="square"></div>
        );
    }
}

export default SquareFader;