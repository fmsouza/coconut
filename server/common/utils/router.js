'use strict';
const { root, server: { baseUrl } } = require('../../config');
const Log = require('./log');
const express = require('express');
const BodyParser = require("body-parser");
const compression = require('compression');
const helmet = require('helmet');
let logger = Log.getServerLogger();

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class {Router}
 */
class Router {

    constructor() {
        this.driver = express();
        this.driver.use(compression());
        this.driver.use(helmet());
        this.driver.use(BodyParser.urlencoded({ extended: true }));
        this.driver.use(BodyParser.json());
        this.driver.use(({ url, method }, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            logger.info(`Serving route ${url} (${method})`);
            next();
        });
    }

    /**
     * Registers a list of resources to handle routes
     * @param {Array} resources
     */
    registerResources(resources) {
        for(var res of resources) {
            const Resource = require(`${root}/${res}`);
            const session = express();
            const tmp = new Resource(session);
            this.driver.use(baseUrl + tmp.base, session);
            logger.info(`Resource registered: ${res}`);
        }
    }

    /**
     * Starts the RESTful server
     * @param {string} ip - Server bind ip
     * @param {number} port - Server bind port
     * @param {Function} callback
     * @returns {void}
     */
    start(ip, port, callback) {
        this.driver.listen(port, ip, () => {
            callback && callback();
            logger.info(`Server started in http://${ip}:${port}`);
        });
    }
}
module.exports = Router;