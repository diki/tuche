var StageManager = Backbone.Collection.extend({

	initialize: function(options){
		console.log("stage manager initialized",options);
		this.renderStage();
		
		this.createBackgroundColor();
		
		this.animateBackground();
	},
	/*
	 * create kinetic stage element 
	 */
	renderStage: function(){
		
		var w = Math.floor(window.innerWidth/1.1);
		var h = Math.floor(window.innerHeight*0.9);
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
	
	createBackgroundColor: function(){
		var dx = this.stage.getWidth();
		var dy = this.stage.getHeight();
		
		var backgroundLayer = new Kinetic.Layer();
        var ctx = backgroundLayer.context;
        var lingrad = ctx.createLinearGradient(0,0,0,550);
    	lingrad.addColorStop(0, '#00ABEB');
    	lingrad.addColorStop(0.5, '#fff');
    	lingrad.addColorStop(0.5, '#66CC00');
    	lingrad.addColorStop(1, '#fff');
    	
    	// create radial gradient
        var grd = ctx.createRadialGradient(dx*0.75, dy/2, 0, dx/2, dy/2, dy);
        // light blue
        grd.addColorStop(0, "#333333");
        
        // dark blue
        grd.addColorStop(1, "#000000");
        
        var rect = new Kinetic.Rect({
          x: 0,
          y: 0,
          width: dx,
          height: dy,
          fill: "rgba(255, 255, 255, 1)"
          //fill: grd
          //stroke: "white",
          //strokeWidth: 4
        });
        
        //var ctx = document.querySelector('canvas').getContext('2d');
		
		        
       	backgroundLayer.add(rect);
        
        var curve = new CurveAnimator([750, 300], [450, 100], [880, 880],[550, 200], [350, 200]);
		
		function sqr(x1){
			return x1*x1;
		}
		
/*		function ortOfRect(r1, r2){
			var result = "";
			
			var x1 = r1.getX();
			var x2 = r2.getX();
			
			var y1 = r1.getY();
			var y2 = r2.getY();
			
			var dl = 
		}*/
		
		
		 
        var rect = new Kinetic.Rect({
		  x: vx,
		  y: vy,
		  width: wx,
		  height: hx,
		  fill: "rgba(0, 255, 255, 1)",
		  stroke: "pink"
		  //id: "rect_"+j
		});
		backgroundLayer.add(rect);
		
		var lastRectIndex = 0;
		var vx = dx/2;
		var vy = dy/2;
		
		var wx = Math.floor((dx/50)*6);
		var hx = Math.floor((dy/40)*8);
		
		var diagonalLength = Math.floor(Math.sqrt(wx*wx+hx*hx));
		
		var currentCenter = new vector(dx/2, dy/2);
		var currentPoint = new vector(vx,vy);
		var startPoint = new vector(vx,vy);
		
		for(var i=0; i<6; i++){

			var cp = 0;
			var centerId = 0;
			var startingPos = 1;
			
			
			var newX = currentPoint.x;
			var newY = currentPoint.y;
			
			var totalRectInThisTurn = sqr(2*i+1);
			var initialRectIndex = sqr(2*i+1) - sqr(2*i-1);
			
			//go to top
			for(kt=0; kt<2*i-1; kt++){
				lastRectIndex++;
				currentPoint.y-=hx;
		        var rect = new Kinetic.Rect({
				  x: currentPoint.x,
				  y: currentPoint.y,
				  width: wx,
				  height: hx,
				  fill: "rgba(0, 0, 255, 1)",
				  stroke: "pink",
				  id: "rect_"+lastRectIndex
				});
				
				
				var simpleText = new Kinetic.Text({
		          x: currentPoint.x+10,
		          y: currentPoint.y+10,
		          text: lastRectIndex,
		          fontSize: 10,
		          fontFamily: "Calibri",
		          textFill: "white",
		          align: "center",
		          verticalAlign: "middle"
		        });
		        
				backgroundLayer.add(rect);
				backgroundLayer.add(simpleText);
			}
			
			
			//go to left
			for(kl=0; kl<2*i; kl++){
				lastRectIndex++;
				currentPoint.x-=wx;
		        var rect = new Kinetic.Rect({
				  x: currentPoint.x,
				  y: currentPoint.y,
				  width: wx,
				  height: hx,
				  fill: "rgba(0, 0, 255, 1)",
				  stroke: "pink",
				  id: "rect_"+lastRectIndex
				});
				
				
				var simpleText = new Kinetic.Text({
		          x: currentPoint.x+10,
		          y: currentPoint.y+10,
		          text: lastRectIndex,
		          fontSize: 10,
		          fontFamily: "Calibri",
		          textFill: "white",
		          align: "center",
		          verticalAlign: "middle"
		        });
		        
				backgroundLayer.add(rect);
				backgroundLayer.add(simpleText);
			}
			
			//go to bottom
			for(kb=0; kb<2*i; kb++){
				lastRectIndex++;
				currentPoint.y+=hx;
		        var rect = new Kinetic.Rect({
				  x: currentPoint.x,
				  y: currentPoint.y,
				  width: wx,
				  height: hx,
				  fill: "rgba(0, 0, 255, 1)",
				  stroke: "pink",
				  id: "rect_"+lastRectIndex
				});
				
				
				var simpleText = new Kinetic.Text({
		          x: currentPoint.x+10,
		          y: currentPoint.y+10,
		          text: lastRectIndex,
		          fontSize: 10,
		          fontFamily: "Calibri",
		          textFill: "white",
		          align: "center",
		          verticalAlign: "middle"
		        });
		        
				backgroundLayer.add(rect);
				backgroundLayer.add(simpleText);
			}
			
			//go to right
			for(kb=0; kb<2*i+1; kb++){
				lastRectIndex++;
				currentPoint.x+=wx;
		        var rect = new Kinetic.Rect({
				  x: currentPoint.x,
				  y: currentPoint.y,
				  width: wx,
				  height: hx,
				  fill: "rgba(0, 0, 255, 1)",
				  stroke: "pink",
				  id: "rect_"+lastRectIndex
				});
				
				
				var simpleText = new Kinetic.Text({
		          x: currentPoint.x+10,
		          y: currentPoint.y+10,
		          text: lastRectIndex,
		          fontSize: 10,
		          fontFamily: "Calibri",
		          textFill: "white",
		          align: "center",
		          verticalAlign: "middle"
		        });
		        
				backgroundLayer.add(rect);
				backgroundLayer.add(simpleText);
			}

						
		}
		
		this.layer = backgroundLayer;
		this.stage.add(backgroundLayer);
		/*var st = [740, 290];
		curve.animate(5, function(point, angle) {
		    // Erase the canvas
		    ctx.save();
		    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		    //ctx.fillRect(point.x-10, point.y-10, 20, 20);
		    ctx.moveTo(st[0], st[1]);
		    ctx.lineTo(point.x-10, point.y-10);
		    ctx.strokeStyle = "blue";
		    ctx.stroke();
		    st = [point.x-10,point.y-10 ]
		    ctx.restore();
		});*/
	},
	getStage: function(){
		return this.stage;
	},
	
	animateBackground: function(){
		var idx = 1;
		var self = this;
		var l = self.layer.children.length;
		console.log(l);
		var i = setInterval(function(){
			var rect = self.layer.get("#rect_"+idx)[0];
			console.log(rect.getAlpha(), idx);
			idx++;
			/*while(rect.getAlpha()>0){
				rect.setAlpha(rect.getAlpha()-0.1);
			}*/
			
			rect.setAlpha(0);
			if(idx==(l/2)-1){
				clearInterval(i);
			}
			
			self.layer.draw();
		}, 10);
	}
	


});