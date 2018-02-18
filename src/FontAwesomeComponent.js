import React from 'react';
import ReactDOM from 'react-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

class FontAwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <FontAwesomeIcon icon={faCoffee} />
        )
    }
}

module.exports = FontAwesomeComponent;