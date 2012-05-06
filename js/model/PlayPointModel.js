var PlayPoint = Backbone.Model.extend({
	
	url: "api/playpoint",
	
	defaults: {
		songName: "Default",
		artist: "Kesha",
		source: "http://muteam.fm/dl/Ott%20-%20Mir%20(2011)/04.%20Squirrel%20And%20Biscuits.mp3"
	},
	
	initialize: function(){
	},
	
	calculateDistance : function(){
		var total = 0;
		var path = this.get("path");

		var it = _.each(path, function(el, idx, arr){
			
			if(idx==arr.length-1){
				return;;
			}
			var r = vectorDistance(el, arr[idx+1]);
			total = total + r;
		});

		this.set("distance", total);

	}
	
});

