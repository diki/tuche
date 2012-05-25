var SoundManagerView = Backbone.View.extend({   //it also manages animation
	
	initialize: function(options){
		
		
		/**
		 *assing signManager to ovject attr 
		 */
		var self = this;
		this.sm = options.sm;
		//sm here is soundManager and assigned to this view when soundManager is ready
		
		//load all songs from playpoint collection
		this.collection.each(function(el){
				self.sm.createSound({
				  id: el.id,
				  url: el.get("source"),
				  autoLoad: true,
				  autoPlay: false,
				  onload: function() {
				    console.log('The sound '+this.sID+' loaded!');
				  },
				  volume: 50
				});
				
		});
	},
	
	animatePlayingSound: function(model, stage, circle){
		console.log(model.attributes, stage, circle);
		
		var cx = stageManager.stage.getWidth()/50;
		var cy = stageManager.stage.getHeight()/40;
		
		var sound = soundManager.getSoundById(model.id);
		if(sound==undefined){
			return false;
		}
		
		if(sound.readyState<3){
			return false;
		}
		
		//calculate speed
		var duration = sound.duration;
		var lineLength = model.calculateDistance(cx,cy);
		
		console.log(duration, lineLength);
		//model start point set
		if(model.get("currentPoint")==undefined){
			if(model.get("path")!==undefined){
				model.set("currentPoint", model.get("path")[0]);
			}
		}
		
		var path = model.path;
		/*for(var i=0; i<path.length; i++){
			if(path[i+1]==undefined){
				break;
			}
			var curve = new CurveAnimator(path[i], path[i+1]);
			
				
		}*/
		
		//playerPointsManager.getLayer().hide();
		var cp = model.get("currentPoint");
		var ctx = playerPointsManager.getLayer().getContext();
		var ly = playerPointsManager.getLayer();
		
		console.log(cp, ly);
		
		var x = cp.x*cx;
		var y = cp.y*cy;
       	
       	console.log(x,y);
       	var line = new Kinetic.Line({
          points: [x,y,x+50,y+50],
          stroke: "yellow",
          strokeWidth: 3,
          lineCap: 'round',
          lineJoin: 'round'
          //alpha: 1
        });
        
        ly.add(line);
        
        ly.draw();
        var curve = new CurveAnimator([750, 300], [450, 100], [880, 880],[550, 200], [350, 200]);
		var st = [740, 290];
		/*curve.animate(10, function(point, angle) {
		    // Erase the canvas
		    //ctx.save();
		    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		    //ctx.fillRect(point.x-10, point.y-10, 20, 20);
		    ctx.moveTo(st[0], st[1]);
		    ctx.lineTo(point.x-10, point.y-10);
		    
		    st = [point.x-10,point.y-10 ]
		    ctx.restore();
           var line = new Kinetic.Line({
	          points: points,
	          stroke: "white",
	          strokeWidth: 3,
	          lineCap: 'round',
	          lineJoin: 'round',
	          id: modelId+"_line",
	          alpha: 1
	        })
		});*/
		
				
		/*stage.onFrame(function(frame){
			//console.log("oh no");
			var start = false;
			var pathIndex 
			
		});
		
		stage.start();*/
		
	}
	
	
});