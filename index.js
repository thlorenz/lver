'use strict';

var spawn = require('child_process').spawn;
var concatStream = require('concat-stream');

var go = module.exports = function (packname, cb) {
  var npminfo = spawn('npm', [ 'info', packname ])
  npminfo.stdout
    .pipe(concatStream(function (data) {
      try {
        if (!data) return cb(new Error('package "' + packname + '" not found!'));

        var code = data.toString().trim(/\\n/g);
        /*jshint evil:true */
        var pack = eval('(function () { return ' + code + '})()');

        cb(null, pack.versions.pop());
      } catch (e) {
        cb(e);
      }
    }));
}
