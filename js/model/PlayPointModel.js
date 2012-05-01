var PlayPoint = Backbone.Model.extend({
	
	url: "api/playpoint",
	
	defaults: {
		songName: "Default",
		artist: "Kesha",
		source: "http://muteam.fm/dl/Ott%20-%20Mir%20(2011)/04.%20Squirrel%20And%20Biscuits.mp3"
	},
	
	initialize: function(){
	}
	
});

