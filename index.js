'use strict';

var spawn = require('child_process').spawn;

var pack = process.argv[2];
pack = 'runnel';

if (!pack) {
  console.error('Usage: lver <packname>');
  process.exit(1);
}


spawn('npm', [ 'info', pack ])
  .stdout.pipe(process.stdout);
