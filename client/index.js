import React from 'react';
import {hydrate} from 'react-dom';
import App from './App';

hydrate(<App socket={WebSocket}/>, document.getElementById('content'));