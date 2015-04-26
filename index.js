'use strict';

var _ = require('lodash');

function MeanBossIO() {
};

MeanBossIO.prototype.start = function() {
	console.log("Let's start the MeanBoss Server!");

	// Load the Config
	this.LoadConfig();

	// Start the Server Engine
	this.StartServerEngine();
};

MeanBossIO.prototype.LoadConfig = function() {
	// Load the Config
	var configPath = process.cwd() + '/config/env';
	if(process.env.NODE_ENV) {
		config.env = process.env.NODE_ENV;
	} else {
		this.config.env = 'development';
	}
	this.config = _.extend(
		require(configPath + '/all'));
		//require(configPath + '/' + process.env.NODE_ENV));
};

MeanBossIO.prototype.StartServerEngine = function() {
	// Start the specified Server Engine
	var engine;
	switch(this.config.serverengine) {
		case 'express':
			engine = new (require('./core_components/ExpressServerEngine'))();
			break;
		default:
			throw 'Server Engine ' + config.serverengine + ' not supported. Open an issue on GitHub if you would like to have support added in a future release.';
	}
	engine.start();
};

// Define Variables
//  variable to hold config data
MeanBossIO.prototype.config = {};

module.exports = exports = new MeanBossIO();