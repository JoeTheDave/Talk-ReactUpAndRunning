
//ApplicationComponent.js

import React from 'react';
import DatePicker from './DatePicker';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.dateChanged = this.dateChanged.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.state = {
            selectedDate: '08/22/2015'
        }
    }

    dateChanged(value) {
        this.state.selectedDate = value;
        this.setState(this.state);
    }

    updateDate() {
        this.dateChanged($('#non-controlled').val());
    }

    render() {
        return (
            <div>
                <div><input id="controlled" type="text" value={this.state.selectedDate} /></div><br />
                <div>
                    <input id="non-controlled" type="text" defaultValue={this.state.selectedDate} />
                    <button onClick={this.updateDate}>Update</button>
                </div><br />
                <DatePicker changeEvent={this.dateChanged} selectedDate={this.state.selectedDate} />
            </div>
        );
    }
}

export default ApplicationComponent;