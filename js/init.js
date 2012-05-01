// Get string methods of underscore-strings.js to use with underscore
_.mixin(_.string.exports());
// Extend Backbone with events so we can use custom events
_.extend(Backbone, Backbone.Events);


var dispatcher = _.clone(Backbone.Events)

function vector(x,y){
	this.x = x;
	this.y = y;
}