'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {configureSocket} from "./services/socketService";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            socket:null
        }
    }

    componentDidMount() {
        if (window) {
            this.setState({socket: configureSocket()});
        }
    }

    render() {
        const {socket} = this.state;
        return (
            [
                <h2 key={1}>Hello world!</h2>,
                <button
                    key={2}
                    onClick={() => socket.send('hello again server!')}
                >
                    Socket away
                </button>
            ]
        )
    }
}

export default App;