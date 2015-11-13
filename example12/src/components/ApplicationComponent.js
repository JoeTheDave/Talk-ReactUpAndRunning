
//ApplicationComponent.js

import React from 'react';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styles = { width: '100px', height: '100px', backgroundColor: '#FF0000' };
        return (
            <div className="application-component">
                <div style={styles}></div>
            </div>
        );
    }
}

export default ApplicationComponent;