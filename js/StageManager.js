var StageManager = Backbone.Collection.extend({

	initialize: function(options){
		console.log("stage manager initialized",options);
		this.renderStage();
	},
	/*
	 * create kinetic stage element 
	 */
	renderStage: function(){
		
		var w = Math.floor(window.innerWidth/1.5);
		var h = Math.floor(window.innerHeight*0.8);
		var self = this;
		
		var stage = new Kinetic.Stage({
          container: "canvas-container",
          width: w,
          height: h,
        });
        
        /**
         *crated global stage object, by global i mean reachable from every methods of object 
         */
        this.stage = stage;
	},
	
	getStage: function(){
		return this.stage;
	}
	


});