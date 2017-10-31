'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    componentDidMount() {
        console.log('mounting!');
        window && window.openWebSocketConnection();
    }
    render() {
        return (
            <h2>Hello world!</h2>
        )
    }
}

export default App;