'use strict';

var _ = require('lodash');
//var component = require('./core_components/Component');
var fs = require('fs');
var glob = require('glob');

function MeanBossIO() {
};

MeanBossIO.prototype.start = function() {
	console.log("Let's start the MeanBoss Server!");

	// Load the Config
	this.LoadConfig();

	// Get the Server Engine
	this.ServerEngine = this.GetServerEngine();

	// Initialize the Server Egine
	this.ServerEngine.init();

	// Load the Components
	//this.Components.LoadAll();
	this.LoadComponents();
	
};

MeanBossIO.prototype.LoadConfig = function() {
	// Load the Config
	var configPath = process.cwd() + '/config/env';
	if(process.env.NODE_ENV) {
		this.config.env = process.env.NODE_ENV;
	} else {
		this.config.env = 'development';
	}
	this.config = _.extend(
		require(configPath + '/all'),
		require(configPath + '/' + this.config.env));
};

MeanBossIO.prototype.GetServerEngine = function() {
	// Start the specified Server Engine
	var engine;
	switch(this.config.serverengine) {
		case 'express':
			engine = new (require('./core_components/ExpressServerEngine'));
			break;
		default:
			throw 'Server Engine ' + this.config.serverengine + ' not supported. Open an issue on GitHub if you would like to have support added in a future release.';
	}
	return engine;
};

MeanBossIO.prototype.LoadComponents = function() {
	var componentsPath = process.cwd() + '/components/';
	glob("/*/", {root: componentsPath}, function(err, componentDirs) {
		if(err) throw err;

		componentDirs.forEach(function(componentDir){
			console.log(componentDir);
			//MeanBossIO.VerifyComponent(componentDir);
			VerifyComponent(componentDir);
		});
	});
};

function VerifyComponent(componentDir) {
	console.log(componentDir);
}

// Define Variables
//  variable to hold config data
MeanBossIO.prototype.config = {};

//  variable to hold ServerEngine Instance
MeanBossIO.prototype.ServerEngine = null;

//  variable to hold Components Instance
//MeanBossIO.prototype.Components = new (require('./core_components/Components'))();

module.exports = exports = new MeanBossIO();