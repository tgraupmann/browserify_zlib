# Overview

[browserify](http://browserify.org/) bundles NodeJS modules for the browser as regular Javascript.

## Syntax

Browser takes an argument to your NodeJS script/module and then just pipe that to output a Javascript file.

```
browserify app.js > bundle.js
```

* Now include the `bundle.js` in your HTML.

```
<script src="bundle.js"></script>
```

## Try it

* Here you can see that the zlib module has been bundles to allow compression/uncompression from Javascript.

[test.html](https://htmlpreview.github.io/?https://github.com/tgraupmann/browserify_zlib/blob/master/test.html)
