'use strict';

import {renderToString} from 'react-dom/server';
import React from 'react';
import makeDoc from './services/buildHtmlDoc';
import App from './client/App';

const fastify = require('fastify')();
const renderedApp = renderToString(<App/>);
const document = makeDoc('starter', renderedApp);

fastify.get('/', (request, reply) => reply.type('text/html').send(document));

module.exports = fastify;