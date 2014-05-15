var http = require('http');

module.exports = function secureOnly(options) {
	options = options || {};

	options.redirect = options.redirect || false;
	options.status = options.status || 404;
	options.body = options.body || http.STATUS_CODES[options.status];

	return function secureOnlyMiddleware(req, res, next) {
		if(req.secure) {
		  next();
		}
		else {
			if(options.redirect) {
				res.redirect(options.redirect);
			}
			else {
				res.send(options.status, options.body);
			}
		}
	};
};