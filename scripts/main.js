// Load assets
Loader.addScenes([

	"scenes/intro.md",
	"scenes/act1.md",
	"scenes/intermission.md",
	
]);

Loader.load(function(progress){

	$("#loading_bar_bg").style.height = (progress*50)+"px";

}).then(function(){

	$("#loading").setAttribute("loaded","yes");
	$("#loading").onclick = function(){
		publish('START_GAME');
	};

	Game.init();

});

subscribe("START_GAME", function(){
		
	$("#loading").style.display = "none";
	Game.start();

	// Intro
	Game.goto("intro");

});

subscribe("SAVE_GAME", function(nextChapter){
	var json = JSON.stringify(_);
	window.localStorage.setItem("continueChapter", nextChapter); // to Continue
	window.localStorage.setItem(nextChapter, json); // for chapter select
});

subscribe("LOAD_GAME", function(fromNextChapter){
	_ = JSON.parse(window.localStorage.getItem(fromNextChapter)); // LOAD IT!
});

// TODO: also save Sound options???

window._SAVE = function(){
	copy(JSON.stringify(_));
};
