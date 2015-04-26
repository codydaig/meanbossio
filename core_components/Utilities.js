'use strict';

var path = require('path');

function walk(walkpath, callback) {
	if (!fs.existsSync(walkpath)) {
		return;
	}
	fs.readdirSync(walkpath).forEach(function(file) {
    var newPath = path.join(walkpath, file);
    var stat = fs.statSync(newPath);
    if (stat.isFile()) {
      callback(newPath);
    } else if (stat.isDirectory()) {
      walk(newPath, callback);
    }
  });
};

exports.walk = walk;