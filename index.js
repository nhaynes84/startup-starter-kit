'use strict';

require('babel-register');
const server = require('./server');

server.listen(8000, err => {
    if (err) throw err;
    console.info(`server listening on ${server.server.address().port}`);
});