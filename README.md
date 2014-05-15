# secure-only

Express middleware for only accept secure requests (i.e. HTTPS requests)

## Example

```js
	var secureOnly = require('secure-only');
	app.get('/login', secureOnly([options]));
```

## Options

* `redirect`:  URL to where the user will be redirected if using a non-secure request (default: false)
* `status`: If not using redirect, send a response with this status (default: 404)
* `body`: If not using redirect, send a response with this body (default: 'Not found' or the http.STATUS_CODE for the given status)