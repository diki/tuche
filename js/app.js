soundManager.onready(function(){
	
	var p1 = new PlayPoint({
		artist: "O.T.T",
		song: "Squirrels and Biscuits",
		source: "http://muteam.fm/dl/Ott%20-%20Mir%20(2011)/04.%20Squirrel%20And%20Biscuits.mp3",
		id: 1,
		position: new vector(4,2),
		path: [new vector(4,2), new vector(8,2), new vector(8, 4), new vector(16,4), 
			new vector(22,10), new vector(25,10), new vector(25,12), new vector(30,12)]
	});
	
	var p2 = new PlayPoint({
		artist: "Carbon Based Lifeforms",
		song: "Photosynthesis",
		source: "http://muteam.fm/dl/Ott%20-%20Mir%20(2011)/04.%20Squirrel%20And%20Biscuits.mp3",
		id:2,
		position: new vector(14,7)
	});
	
	var p3 = new PlayPoint({
		artist: "Younger Brother",
		song: "SYS 700", 
		id:3,
		source: "http://phalckon.stc.cx/mp3/Younger%20Brother%20-%20The%20Last%20Days%20Of%20Gravity/09%20-%20Psychic%20Gibbon.mp3",
		position: new vector(15,9)
	});
	var p4 = new PlayPoint({
		artist: "Shpongle",
		song: "When shall i be free",
		id:4,
		position: new vector(16,11)
	});
	
	var p5 = new PlayPoint({
		artist: "Izmael",
		id: 5,
		position: new vector(21,4)
	});
	
	var p6 = new PlayPoint({
		artist: "Pretty Lights",
		song: "Up & Down I Go",
		id: 6,
		position: new vector(32,9)
	});
	
	window.pc = new PlayPointCollection([p1,p2, p3, p4, p5, p6]);
	
	window.smView = new SoundManagerView({
		sm: soundManager,
		collection: pc
	});
	
	window.stageManager = new StageManager({
		collection: pc
	});
	
	window.playerLinesManager = new PlayerLinesManager({collection: pc, stageManager: stageManager});
	
	window.playerPointsManager = new PlayerPointsManager({
		collection: pc, 
		stageManager: stageManager,
		playerLinesManager: playerLinesManager
	});
	
	/*window.c = new CanvasView({
		collection: pc, 
		stageManager: stageManager,
		playerLinesManager: playerLinesManager
	});*/

});
//pc.add(p1);
//pc.add(p2);