
//ApplicationComponent.js

import React from 'react';
import FormField from './FormField';

class ApplicationComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormField label={'name'} />
                <FormField label={'phone'} mask={'999-999-9999'} />
                <FormField label={'birthday'} mask={'99/99/9999'} />
                <FormField label={'SSN'} mask={'999-99-9999'} />
                <button type="buton">Submit</button>
            </div>
        );
    }
}

export default ApplicationComponent;