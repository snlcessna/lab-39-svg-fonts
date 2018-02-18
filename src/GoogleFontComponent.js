import React from 'react';
import ReactDOM from 'react-dom';


class GoogleFontComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div id="googleFont">This is the google font component which I have styled with a google font</div>
        )
    }
}

module.exports = GoogleFontComponent;