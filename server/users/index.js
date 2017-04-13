'use strict';
const wrap = require('co-express');
const Validator = require('../common/validators');
const Repository = require('../common/repositories');
class UsersResource {

	get base() { return '/users'; }

	constructor(router) {
		router.post('/auth', wrap(this.login));
	}

	*login(request, response) {
		try {
			Validator.login(request.body);
			const { username, password } = request.body;
			const result = yield Action.login(username, password);
			response.status(200).jsonp(result);
		} catch ({ code, message }) {
			response.status(code).send(message);
		}
	}
}
module.exports = UsersResource;