# lver [![build status](https://secure.travis-ci.org/thlorenz/lver.png)](http://travis-ci.org/thlorenz/lver)

Returns latest published version of a given npm package.

```sh
➝  lver concat-stream
1.0.1
```

```js
var lver = require('lver');
lver('concat-stream', function (err, version) {
  if (err) return console.error(err);
  console.log(version);  
});

```

## Installation

    npm install lver

## License

MIT
