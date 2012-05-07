// Get string methods of underscore-strings.js to use with underscore
_.mixin(_.string.exports());
// Extend Backbone with events so we can use custom events
_.extend(Backbone, Backbone.Events);


var dispatcher = _.clone(Backbone.Events)

function vector(x,y){
	this.x = x;
	this.y = y;
}

function vectorDistance(v1,v2){
	var r = (v2.y-v1.y) * (v2.y-v1.y) + (v2.x-v1.x) * (v2.x-v1.x);
	return Math.sqrt(r);
}

function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}