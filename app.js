fs = require('fs');
zlib = require('zlib');

const file = 'json.gz';
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
      fs.writeFile(file, content, function (err) {
        if (err) {
          console.log(err);
          return;
        } else {
          testDecompression();
        }
      });
    }
  });
}

function testDecompression() {
  fs.readFile(file, function (err, data) {
    fs.unlink(file, function () {});
    if (err) {
      console.log('error', err);
      return;
    }
    zlib.gunzip(data, {chunkSize: 65536}, function (err, data) {
      if (err) {
        console.log('error', err);
        return;
      } else {
        var uncompressedResult = data.toString();
        console.log('uncompressedResult', uncompressedResult);
      }
    });
  });
}

testCompression();