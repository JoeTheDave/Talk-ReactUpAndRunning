
//ApplicationComponent.js

import React from 'react';
import Modal from './Modal';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.state = {
            showModal: false
        };
    }

    openModal() {
        this.state.showModal = !this.state.showModal;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Toggle Modal</button>
                <Modal isOpen={this.state.showModal} title={"Chuck Norris"}>
                    <img src="img/chuckNorris.gif" />
                </Modal>
            </div>
        );
    }
}

export default ApplicationComponent;