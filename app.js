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