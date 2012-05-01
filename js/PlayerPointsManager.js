/**
 *these classes are intented to be designed as layers
 * Manger class is responsible of a layer 
 */

var PlayerPointsManager = Backbone.View.extend({
	
	//tagName: "div",
	initialize: function(options){
	
		_.bindAll(this, "render");
		
		this.stageManager = options.stageManager;
		this.stage = this.stageManager.getStage();
		this.collection = options.collection
		
		this.playerLinesLayer = options.playerLinesManager.getLayer();
		//console.log(self);
		//draw layer
		this.drawPlayerPoints();
	},
	
	drawPlayerPoints: function(){
		        
        var self = this;
        var stage = this.stage;
        
		/**
		 *drawing playintpoint here using default locations
		 */
		var openingLayer = new Kinetic.Layer();
		var messageLayer = new Kinetic.Layer();
		
		var ctx = openingLayer.getCanvas().getContext("2d");
		/**
		 *collection object holds playPointModels 
		 */
		this.collection.each(function(el, idx){
			var position = el.get("position");
			
			var cx = (stage.getWidth()/50)*position.x;
			var cy = (stage.getHeight()/40)*position.y;
			var radius = stage.getHeight()/60;
			var randomRadius = stage.getHeight()/(120+getRandomInt(0,6)*20);
			
			
			var group = new Kinetic.Group({
	          x: 0,
	          y: 0
	        });
			//draw playing point circles
			var circle = new Kinetic.Circle({
				x: cx,
				y: cy,
				radius: randomRadius,
				stroke: "#7dc0da"
			});
			
			ctx.globalCompositeOperation = "lighter";
			
			var outerCircle = new Kinetic.Circle({
				x: cx,
				y: cy,
				radius: radius,
				fill: "white",
				alpha: 0.2
			});
			
			group.add(outerCircle);
			group.add(circle);
			openingLayer.add(group);
			
			var expanding = false;
			var outerAnim = setInterval(function(){
				var r = outerCircle.attrs.radius;
				
				if(expanding){
					outerCircle.attrs.radius = outerCircle.attrs.radius + radius/100;
					if(outerCircle.attrs.radius>=radius){
						expanding = false;
					}
				} else {
					outerCircle.attrs.radius = outerCircle.attrs.radius - radius/100;
					if(outerCircle.attrs.radius<=randomRadius+radius/100){
						expanding = true;
					}
				}
				
				openingLayer.draw();
			}, 20);
			
			//playing line of this point
			var line = self.playerLinesLayer.get("#" + el.id+"_line");
			circle.on("mouseout", function() {

	        });
	
	        circle.on("click", function() {
				
				if(line.length>0){
					var l = line[0];
					
					if(l.attrs.alpha>=0.7){
						/*var ii = setInterval(function(){
							l.attrs.alpha = l.attrs.alpha - (1/10);
							if(l.attrs.alpha<0.3){
								l.attrs.alpha = 0.3;
								clearInterval(ii);
							}
							l.attrs.stroke = "#7dc0da";
							self.playerLinesLayer.draw();
						}, 50);*/
						
					} else {
						var ii2 = setInterval(function(){
							l.attrs.alpha = l.attrs.alpha + (1/10);
							if(l.attrs.alpha>0.9){
								l.attrs.alpha = 0.7;
								clearInterval(ii2);
							}
							l.attrs.stroke = "white";
							self.playerLinesLayer.draw();
						}, 50);
					}
					
				} else {
					
				}
				
	        	self.writePlayingPointsMessageLayer(el.get("artist"));
				self.selectedPlayingPoint = this;
				self.selectedPlayingPointModel = el;
	        });
		});
		
		
        stage.add(messageLayer);
		stage.add(openingLayer);
		
		this.layer = openingLayer;
        this.messageLayer = messageLayer;

	},
	
	/**
	 *helper function to write messages on canvas 
	 */
	writePlayingPointsMessageLayer: function(message){
	
		var context = this.messageLayer.getContext();
        this.messageLayer.clear();
        var cx = this.stage.getWidth()/50*5;
        var cy = this.stage.getHeight()/40*30;
        
        console.log(message);
        context.font = "18pt Calibri";
        context.fillStyle = "white";
        context.fillText(message, cx, cy);	
	},
	
	getLayer: function(){
		return this.layer;
	}

});