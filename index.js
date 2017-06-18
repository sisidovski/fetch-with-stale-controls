const _fetch = require('node-fetch');

const defaultOptions = {
	timeout: 5,
	swr: 30,
	sie: 30
};

const normalizeHeaderName = headers => {
	const result = {};
	Object.keys(headers).forEach(key => {
		result[key.toLowerCase()] = headers[key];
	});
	return result;
};

const getCacheControl = (headers, options) => {
	if (!options.swr && !options.sie) {
		return null;
	}
	const cacheControl = headers['cache-control'];
	if (!cacheControl) {
	}
};

const fetch = (url, _options) => {
	const options = Object.assign({}, defaultOptions, _options);
	const headers = normalizeHeaderName(options.headers);
	const cacheControl = getCacheControl(headers, options);
	if (cacheControl) {
		headers['cache-control'] = cacheControl;
	}

	delete options.swr;
	delete options.sie;

	return _fetch(url, options);
};

module.exports = fetch;