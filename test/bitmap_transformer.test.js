var expect = require('chai').expect;
var fs = require('fs');
var transformer = require('../lib/transformer');

var bufferObject;

describe('bitmap transformer', function() {
  before(function(done) {
    fs.readFile('./img/test_bitmap_file.bmp', function(err, data) {
      bufferObject = data;
      done();
    });
  });

  it('should contain a function', function() {
    expect(typeof transformer.invert).to.eql('function');
  });

  it('should contain a buffer', function() {
    expect(Buffer.isBuffer(bufferObject)).to.eql(true);
  });

  it('should call a callback with a buffer', function(done) {
    transformer.invert(bufferObject, function(err, data) {
      expect(err).to.eql(null);
      expect(Buffer.isBuffer(data)).to.eql(true);
      done();
    });
  });

});
