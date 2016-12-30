const fs = require('fs');
var transformer = require('./lib/transformer');
var output;

var file = process.argv[2];
var transform = process.argv[3];

function write() {
  var newFile = '' + file + '_' + transform + '.bmp';
  fs.writeFile(newFile, output, function(err) {
    if(err) {
      throw err;
    }
    console.log('file saved as' + newFile);
  });
}


fs.readFile(file, function(err, data) {
  transformer[transform](data, function(err, data) {
    output = data;
    write();
  });
});
