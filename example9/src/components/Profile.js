
//Profile.js

import React from 'react';

class Profile extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-component">
	            <img src={this.props.person.image} />
	            <div>{this.props.person.name}</div>
            </div>
        );
    }
}

export default Profile;