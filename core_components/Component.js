'use strict';

function Component() {

};

Component.prototype.register = function() {
	console.log("Registering this thing");
};

module.exports = new Component();