'use strict';
const Datastore = require('nedb');
const { root, dbPath } = require('../../config');

const db = new Datastore({ filename: `${dbPath}/users.db`, autoload: true });

const count = (query) => db.count(query);

const find = (query) => db.find(query);

const findOne = (query) => db.findOne(query);

const insert = (query) => new Promise((resolve, reject) => {
    db.insert(query, (error, newDocs) => {
        if (error) reject(error);
        else resolve(newDocs);
    });
});

const update = (query, update, options) => new Promise((resolve, reject) => {
    db.update(query, update, options, (error, newDocs) => {
        if (error) reject(error);
        else resolve(newDocs);
    });
});

const remove = (query, options) => new Promise((resolve, reject) => {
    db.remove(query, options, (error, newDocs) => {
        if (error) reject(error);
        else resolve(newDocs);
    });
});

const ensureIndex = (options) => new Promise((resolve, reject) => {
    db.ensureIndex(options, (error) => {
        if (error) reject(error);
    });
});

const removeIndex = (options) => new Promise((resolve, reject) => {
    db.removeIndex(options, (error) => {
        if (error) reject(error);
    });
});