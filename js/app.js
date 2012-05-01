
var p1 = new PlayPoint({
	artist: "O.T.T",
	id: 1,
	position: new vector(4,2),
	path: [new vector(4,2), new vector(8,2), new vector(8, 4), new vector(16,4), 
		new vector(22,10), new vector(25,10), new vector(25,12), new vector(30,12)]
});

var p2 = new PlayPoint({
	artist: "Carbon Based Lifeforms",
	id:2,
	position: new vector(3,7)
});

var p3 = new PlayPoint({
	artist: "Younger Brother",
	id:3,
	position: new vector(3,9)
});
var p4 = new PlayPoint({
	artist: "Shpongle",
	id:4,
	position: new vector(3,11)
});

var p5 = new PlayPoint({
	artist: "Izmael",
	id: 5,
	position: new vector(6,4)
});

var p6 = new PlayPoint({
	artist: "Pretty Lights",
	id: 6,
	position: new vector(12,9)
});

var pc = new PlayPointCollection([p1,p2, p3, p4, p5, p6]);

var stageManager = new StageManager({
});

var playerLinesManager = new PlayerLinesManager({collection: pc, stageManager: stageManager});

var playerPointsManager = new PlayerPointsManager({
	collection: pc, 
	stageManager: stageManager,
	playerLinesManager: playerLinesManager
});

var c = new CanvasView({
	collection: pc, 
	stageManager: stageManager,
	playerLinesManager: playerLinesManager
});

//pc.add(p1);
//pc.add(p2);