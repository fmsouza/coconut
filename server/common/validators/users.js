'use strict';
module.exports = {
    login: ({ username, password }) => {
        let error = null;
        if (!username) error = new Error('The username field is required.');
        if (!password) error = new Error('The password field is required.');
        if (error) {
            error.code = 500;
            throw error;
        }
    }
};
