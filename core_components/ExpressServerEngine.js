'use strict';

var express = require('express');

function ExpressServerEngine() {
};

ExpressServerEngine.prototype.init = function() {
	console.log("This will initialize express as out server engine.");
	var app = express();
	this.app = app;
};

module.exports = ExpressServerEngine;