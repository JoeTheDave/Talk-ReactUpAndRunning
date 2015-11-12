
//ApplicationComponent.js

import React from 'react';
import Profile from './Profile';
import dataService from '../services/dataService';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: dataService.getPeople()
        };
    }

    render() {
        return (
            <div>
                {this.state.people.map((person, index) => {
                    return (
                        <Profile key={index} person={person} />
                    );
                })}
                <div className="clear"></div>
            </div>
        );
    }
}

export default ApplicationComponent;