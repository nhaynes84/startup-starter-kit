'use strict';

import {renderToString} from 'react-dom/server';
import React from 'react';
import makeDoc from './services/buildHtmlDoc';
import App from './client/App';
import {Provider} from 'react-redux';
import store from './client/store';
import WebSocket from 'ws';

const fastify = require('fastify')();
const socketServer = new WebSocket.Server(fastify, {perMessageDeflate: false});
socketServer.on('connection', ws => {
    console.info('serer connection');
    ws.on('open', () => console.info('client connected!'));
    ws.on('message', (data) => console.info(data));
});



const renderedApp = renderToString(<Provider store={store}><App/></Provider>);
const document = makeDoc('starter', renderedApp);

fastify.get('/', (request, reply) => reply.type('text/html').send(document));

module.exports = fastify;