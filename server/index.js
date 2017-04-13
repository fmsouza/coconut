'use strict';
/* global process; */
const co = require('co');
const { resources, server: { ip, port } } = require('./config');
const { Log, Router } = require('./common/utils');

const logger = Log.getRuntimeLogger();

co(function* main() {
    logger.info('Starting the server...');
    const router = new Router();
    router.registerResources(resources); // Registering resources to handle the URLs
    router.start(ip, port); // Starting the server
})
.catch((error) => {
    logger.error(error);
    process.exit(1);
});