# fetch-with-stale-controls
A wrapper of node-fetch(https://github.com/bitinn/node-fetch) with HTTP stale controls and setting default timeout.

## features

- Expose `stale` extensions. `swr` option sets [stale-while-revalidate](https://tools.ietf.org/html/rfc5861#section-3), `sie` option sets [stale-if-error](https://tools.ietf.org/html/rfc5861#section-4) to Cache-Control header. Both options are set 30 sec as a default.
- Set `5 sec` as a default timeout value.

## Install

```
npm install --save fetch-with-stale-controls
```

## API

### fetch(url[, options])

- `url` 
- `options` [node-fetch options](https://github.com/bitinn/node-fetch/blob/master/README.md#fetch-options) with additional extensions.

```js
{
  // In addition to fetch Standard and node-fetch extensions
  swr: 30,
  sie: 30
}
```