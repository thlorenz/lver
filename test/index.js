'use strict';
/*jshint asi: true */

var test = require('tap').test
var lver = require('../')

test('\nrunnel latest version', function (t) {
  var myLatestVersion = require('../package.json').version;
  lver('runnel', function (err, version) {
    if (err) return t.fail(err);
    var num = parseInt(version.split('.').slice(1).join(''), 10)
    t.ok(num >= 51)
    t.end();
  });
})
