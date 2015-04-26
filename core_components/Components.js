'use strict';

var glob = require('glob');

function Components() {
};

Components.prototype.LoadAll = function() {
	var componentsPath = process.cwd() + '/components/';
	glob("/*/", {root: componentsPath}, function(err, componentDirs) {
		if(err) throw err;

		componentDirs.forEach(function(componentDir){
			Load(componentDir);
		});
	});
};

Components.prototype.Load = function(dir) {
	console.log(dir);
};

module.exports = Components;