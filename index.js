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

        var version = pack.version || (pack.versions && pack.versions.pop());
        if (!version) return cb(new Error('Unable to determine latest version of ' + packname));
        cb(null, version);
      } catch (e) {
        cb(e);
      }
    }));
}
