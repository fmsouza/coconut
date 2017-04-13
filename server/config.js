'use strict';
/* global __dirname, process; */
const moment = require('moment');
const time = moment().format('YYYY-MM-DD');
const logPath = process.env.LOG_PATH || './logs';

module.exports = {
    root: __dirname,
    logs: {
        runtime: `${logPath}/runtime-${time}.log`,
        server: `${logPath}/server-${time}.log`
    },
    server: {
        ip: '0.0.0.0',
        port: process.env.SERVER_PORT || 8080,
        baseUrl: process.env.API_BASE_URL || '/api',
    },
    dbPath: __dirname + '/db',
    resources: [
        'users'
    ]
};
