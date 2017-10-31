'use strict';

import path from 'path';
import {renderToString} from 'react-dom/server';
import React from 'react';
import makeDoc from './services/buildHtmlDoc';
import App from './client/App';
import {Provider} from 'react-redux';
import store from './client/store';
import WebSocket from 'ws';
import statics from 'fastify-static';

const fastify = require('fastify')();
fastify.register(statics, {
    root: path.join(__dirname, 'dist'),
    prefix: '/public'
});

const socketServer = new WebSocket.Server(fastify, {perMessageDeflate: false});
socketServer.on('connection', ws => {
    console.info('client connection');
    ws.on('message', (data) => {
        console.info(`Recieving data: ${data}`);
        ws.send('Hello to you client!');
    });
});

const renderedApp = renderToString(<Provider store={store}><App/></Provider>);
const document = makeDoc('starter', renderedApp);

fastify.get('/', (request, reply) => reply.type('text/html').send(document));

module.exports = fastify;