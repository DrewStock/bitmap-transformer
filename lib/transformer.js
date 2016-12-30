function invert(data, callback) {

  var dataStart = data.readUInt32LE(10);

  if(dataStart === 54) {
    dataStart = data.length;
  }

  for (var i = 54; i < dataStart; i++) {
    data[i] = 255 - data[i];
  }
  callback(null, data);
}

exports.invert = invert;
