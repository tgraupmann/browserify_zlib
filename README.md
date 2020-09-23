# Overview

[browserify](http://browserify.org/) bundles NodeJS modules for the browser as regular Javascript.

## Script

We start with a NodeJS [app.js](app.js) script that does compression/uncompression.

```
zlib = require('zlib');

var compressedData = undefined;

function testCompression() {
  var uncompressedString = 'Hello World!';
  console.log('uncompressedString', uncompressedString);
  zlib.gzip(uncompressedString, function (err, content) {
    if (err) {
      console.log('error', err);
      return;
    } else {
      compressedData = content;
      console.log('compressedData', compressedData.toString());
      testDecompression();
    }
  });
}

function testDecompression() {
  zlib.gunzip(compressedData, {chunkSize: 65536}, function (err, data) {
    if (err) {
      console.log('error', err);
      return;
    } else {
      var uncompressedResult = data.toString();
      console.log('uncompressedResult', uncompressedResult);
    }
  });
}

testCompression();
```

## Syntax

Browser takes an argument to your NodeJS script/module and then just pipe that to output a Javascript file.

```
browserify app.js > bundle.js
```

Now include the `bundle.js` in your HTML.

```
<script src="bundle.js"></script>
```

## Try it

[test.html](https://htmlpreview.github.io/?https://github.com/tgraupmann/browserify_zlib/blob/master/test.html) - Here you can see that the zlib module has been bundled to allow compression/uncompression from Javascript.
