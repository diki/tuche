var PlayPointModelView = Backbone.View.extend({
    tagName: 'div',
    className: 'playing-point',
    
    initialize: function(options){
    	_.bindAll(this, "render");
    	this.render();
    },
    
    render: function(){
    	return this;
    }
});