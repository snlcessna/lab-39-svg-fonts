'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';

import FontAwesomeComponent from './FontAwesomeComponent';
import GoogleFontComponent from './GoogleFontComponent';

const main = document.getElementById('main');


class App extends React.Component {
    constructor(props) {
        super(props);     
    }
    

    render() {

        return (
            <div>
                <FontAwesomeComponent />
                <GoogleFontComponent />
            </div>
        )
    }
}

ReactDOM.render(<App/>, main);