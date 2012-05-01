/**
 *these classes are intented to be designed as layers
 * Manger class is responsible of a layer 
 */

var PlayerLinesManager = Backbone.View.extend({
	
	//tagName: "div",
	initialize: function(options){
	
		_.bindAll(this, "render");
		
		this.stageManager = options.stageManager;
		this.stage = this.stageManager.getStage();
		this.collection = options.collection
		
		//console.log(self);
		//draw layer
		this.drawPlayerLines();
	},
	
	drawPlayerLines: function(){
		var linesStage = new Kinetic.Layer();
		var self = this;
		var cx = self.stage.getWidth()/50;
		var cy = self.stage.getHeight()/40;
		
		this.collection.each(function(el, idx){
		
			if(el.get("path")==undefined || el.get("path")==null){
				return;
			}else {
				var p = el.get("path");
				//console.log(el.get("path")[0]);
				var points = _.map(p, function(v){
					return {
						x: cx * v.x,
						y: cy * v.y
					}
				});
				var l = self.drawKineticLine(points, el.id);
				linesStage.add(l);
			}
		});
		
		//make managers layer accesible from outside
		this.layer = linesStage;
		self.stage.add(linesStage);
	},
	
	getLayer: function(){
		return this.layer;
	},
	
	drawKineticLine: function(points, modelId){
        var layer = new Kinetic.Layer();

        var line = new Kinetic.Line({
          points: points,
          stroke: "white",
          strokeWidth: 3,
          lineCap: 'round',
          lineJoin: 'round',
          id: modelId+"_line",
          alpha: 0
        });
        return line;
	},
	
});