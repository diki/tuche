/**
 * all view operations of canvas including drawing and animation will be handled by this shit
 * Responsible for:
 * creating canvas
 * canvas operations like drawing line, moving points ...
 * first drawing
 * animation
 * sizing of canvas, image ??
 */


/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var CanvasView = Backbone.View.extend({
	el: "#canvas-container",
	/**
	 *vector object holds position of playing points
	 * margin of pp according to width and height 
	 */
	initialize: function(options){
		
		
		_.bindAll(this, "multiColorRadialGradient",
		"drawPlayerHeartLayer", 
		"drawKineticPolygon","drawCircle");
		var self = this;
		this.collection = options.collection;
		
		this.stageManager = options.stageManager;
		this.stage = this.stageManager.getStage();
		
		this.playerLinesManager = options.playerLinesManager;
		this.playerLinesLayer = this.playerLinesManager.getLayer(); 
		//default values are calculated accroding to canvas width and height
		// values represent times * height/50
		
		/**
		 * creating canvas and context here
		 * also margins and size of various elements will be calculated here
		 * 
		 * creating canvas layers here
		 */
		
		//creating canvas layers		
		//this.drawPlayingPointsLayer();
		this.drawPlayerHeartLayer();
		
		this.canvasWidth = this.stage.getWidth();
		this.canvasHeight = this.stage.getHeight();		
	},
	
	drawPlayerHeartLayer: function(){
        var heartLayer = new Kinetic.Layer();
		
		var cx = this.stage.getWidth();
		var cy = this.stage.getHeight();
		
        var rect = new Kinetic.Rect({
          x: (cx/50)*30,
          y: (cy/40)*15,
          width: (cx/50)*4,
          height: (cy/40)*6,
          //fill: "#00D2FF",
          stroke: "white",
          strokeWidth: 4
        });

        // add the shape to the layer
        heartLayer.add(rect);
        this.heartLayer = heartLayer;
        this.stage.add(heartLayer);
	},
	
	
	drawKineticPolygon: function(){
        var layer = new Kinetic.Layer();

        var points = [{
          x: 73,
          y: 192
        }, {
          x: 73,
          y: 160
        }, {
          x: 340,
          y: 23
        }, {
          x: 500,
          y: 109
        }, {
          x: 499,
          y: 139
        }, {
          x: 342,
          y: 93
        }];

        var poly = new Kinetic.Polygon({
          points: points,
          fill: "#00D2FF",
          stroke: "black",
          strokeWidth: 5
        });

        // add the shape to the layer
        layer.add(poly);
        
        console.log("layer", layer);
        this.stage.add(layer);
	},
	
	drawKineticRegularPolygon: function(){
        var layer = new Kinetic.Layer();

        var hexagon = new Kinetic.RegularPolygon({
          x: stage.getWidth() / 2,
          y: stage.getHeight() / 2,
          sides: 6,
          radius: 70,
          fill: "red",
          stroke: "black",
          strokeWidth: 4
        });

        // add the shape to the layer
        layer.add(hexagon);
	},
	
	drawKineticShape: function(){
        var layer = new Kinetic.Layer();

        /*
         * create a triangle shape by defining a
         * drawing function which draws a triangle
         */
        var triangle = new Kinetic.Shape({
          drawFunc: function() {
            var context = this.getContext();
            context.beginPath();
            context.moveTo(200, 50);
            context.lineTo(420, 80);
            context.quadraticCurveTo(300, 100, 260, 170);
            context.closePath();
            this.fillStroke();
          },
          fill: "#00D2FF",
          stroke: "black",
          strokeWidth: 4
        });

        // add the triangle shape to the layer
        layer.add(triangle);
	},
	
	drawKineticGroup: function(){
        var shapesLayer = new Kinetic.Layer();

        /*
         * create a group which will be used to combine
         * multiple simple shapes.  Transforming the group will
         * transform all of the simple shapes together as
         * one unit
         */
        var group = new Kinetic.Group({
          x: 220,
          y: 40,
          rotationDeg: 20
        });

        var colors = ["red", "orange", "yellow"];

        for(var n = 0; n < 3; n++) {
          // anonymous function to induce scope
          (function() {
            var i = n;
            var box = new Kinetic.Rect({
              x: i * 30,
              y: i * 18,
              width: 100,
              height: 50,
              name: colors[i],
              fill: colors[i],
              stroke: "black",
              strokeWidth: 4
            });

            group.add(box);
          })();
        }

        shapesLayer.add(group);
	},
	renderPlayingPoints: function(){
		/**
		 * remember all shapes on canvas surface must be proportinal to canvas size to handle different resolutions
		 */
		
		
	},
	
	/**
	 * canvas operations
	 * TODO: manage canvas related to functions on  
	 */
	multiColorRadialGradient: function(){
		var context = this.context;
		
	    context.beginPath(); // begin custom shape
	    context.moveTo(170, 80);
	    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
	    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
	    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
	    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
	    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
	    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
	    context.closePath(); // complete custom shape
	 
	    // create radial gradient
	    var grd = context.createRadialGradient(238, 50, 10, 238, 50, 200);
	    grd.addColorStop(0, "#8ED6FF"); // light blue
	    grd.addColorStop(1, "#004CB3"); // dark blue
	    context.fillStyle = grd;
	    context.fill();
	 
	    // add stroke
	    context.lineWidth = 5;
	    context.strokeStyle = "#0000ff";
	    context.stroke();
	},
	
	drawRectangle: function(){
		var context = this.context;
		
        context.beginPath();
        context.rect(188, 50, 200, 100);
        //context.fillStyle = '#8ED6FF';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = 'yellow';
        context.stroke();
	},
	
	drawCircle: function(centerX, centerY,radius){
		var context = this.context;
		
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        //context.fillStyle = "#8ED6FF";
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = "#7dc0da";
        context.stroke();
	}
}); 