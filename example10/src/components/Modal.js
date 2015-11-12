
//Modal.js

import React from 'react';

class Modal extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div className="modal-component">
                    <div className="header">Header</div>
                    <div className="content">{this.props.children}</div>
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default Modal;