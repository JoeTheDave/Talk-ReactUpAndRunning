
//Profile.js

import React from 'react';

class Profile extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.handler}>{this.props.text}</button>
        );
    }
}

export default Profile;