#!/usr/bin/env node

var pack = process.argv[2];
var lver = require('../');

if (!pack) {
  console.error('Usage: lver <packname>');
  process.exit(1);
}

lver(pack, function (err, version) {
  if (err) return console.error(err);
  console.log(version);  
});
