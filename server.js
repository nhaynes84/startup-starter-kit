import {renderToString} from 'react-dom/server';
import React from 'react';
import doc from './htmlDoc';
import App from './App';

const fastify = require('fastify')();
const renderedApp = renderToString(<App/>);

fastify.get('/', (request, reply) => {
    reply.type('text/html').send(doc('starter', renderedApp));
});

module.exports = fastify;