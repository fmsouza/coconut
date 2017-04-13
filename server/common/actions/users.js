const Repository = require('../repositories');

module.exports = {
    login: (username, password) => new Promise((resolve, reject) => {
        Repository.users.findOne({ username, password }).then(resolve, reject);
    })
};