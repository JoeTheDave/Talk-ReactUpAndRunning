
//DatePicker.js

import React from 'react';
import {findDOMNode} from 'react-dom';

class DatePicker extends React.Component{
    constructor (props) {
        super(props);
        this.datePickerValueChanged = this.datePickerValueChanged.bind(this);
    }

    setDateProperty() {
        $(findDOMNode(this)).context.value = this.props.selectedDate;
    }

    datePickerValueChanged() {
        this.props.changeEvent($(findDOMNode(this)).context.value);
    }

    componentDidMount() {
        $(findDOMNode(this)).kendoDatePicker({
            format: "MM/dd/yyyy"
        }).change(this.datePickerValueChanged);
        this.setDateProperty();
    }

    componentDidUpdate() {
        this.setDateProperty();
    }

    render() {
        return (
            <input />
        );
    }
}

DatePicker.propTypes = {
    selectedDate: React.PropTypes.string.isRequired,
    changeEvent: React.PropTypes.func.isRequired
}

export default DatePicker;