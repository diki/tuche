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
		
		console.log("drawig");    
        var self = this;
        var stage = this.stage;
        
		/**
		 *drawing playintpoint here using default locations
		 */
		var openingLayer = new Kinetic.Layer();
		var messageLayer = new Kinetic.Layer();
		
		var context = openingLayer.getContext();
		
		context.strokeStyle = "#FF0000";
		context.fillStyle = "#FFFF00";
		context.beginPath();
		context.arc(100,100,50,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();
		
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
			
			context.globalCompositeOperation = "lighter";
	        
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
			//player points click events
			
			circle.on("mouseover", function(){
				self.writePlayingPointsMessageLayer(el.get("artist") + " -- " + el.get("song"));
			});
	        circle.on("click", function() {
				
				//some model data, song data will be handled here
				
				//delegating point,line and sound relation to other method
				//playSoundWithAnimation(el.id);
				
				//layer drawn here now load sounds with soundManager
				smView.animatePlayingSound(el, stage, circle);
				if(line.length>0){
					var l = line[0];
					
					if(l.attrs.alpha>=0.7){

						
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
	        	
				self.selectedPlayingPoint = this;
				self.selectedPlayingPointModel = el;
	        });
		});
	 	var redLine = new Kinetic.Line({
          points: [{x:73, y:70}, {x:340, y:23}],
          stroke: "red",
          strokeWidth: 15,
          lineCap: "round",
          lineJoin: "round"
        });
        
        var blueRect = new Kinetic.Rect({
          x: 50,
          y: 75,
          width: 100,
          height: 50,
          fill: "#00D2FF",
          stroke: "black",
          strokeWidth: 4
        });
        
        
        openingLayer.add(redLine);
        openingLayer.add(blueRect);
        
        openingLayer.add(redLine);
        //openingLayer.draw();
		//openingLayer.setAlpha(0);
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