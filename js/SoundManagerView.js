var SoundManagerView = Backbone.View.extend({
	
	initialize: function(options){
		
		/**
		 *set soundmanager global setting 
		 */
		soundManager.url = '/swf/soundmanager2_flash9.swf';
		
		soundManager.flashVersion = 9; // optional: shiny features (default = 8)
		soundManager.useFlashBlock = false;
		
		/**
		 *assing signManager to ovject attr 
		 */
		var self = this;
		soundManager.onready(function(){
			self.sm = soundManager;
		  	var testSound = soundManager.createSound({
			    id: 'aSound',
			    url: 'http://muteam.fm/dl/Ott%20-%20Mir%20(2011)/04.%20Squirrel%20And%20Biscuits.mp3'
			    // onload: myOnloadHandler,
			    // other options here..
			});
			testSound.play();
		});	
	}
	
});