window.Loader = {};
window.Library = {
	images: {},
	sounds: {}
};
Loader.load = function(progressCallback){

	var totalAssets = Loader.sceneSources.length + Loader.imageConfigs.length + Loader.soundConfigs.length;
	var assetsLoaded = 0;
	subscribe("assetLoaded", function(){
		assetsLoaded++;
		progressCallback(assetsLoaded/totalAssets);
	});
	return new RSVP.Promise(function(resolve){
		
		var loadPromises = [];
		Loader.sceneSources.forEach(function(src){
			loadPromises.push( Loader.loadScene(src) );
		});
		Loader.imageConfigs.forEach(function(config){
			loadPromises.push( Loader.loadImage(config) );
		});
		Loader.soundConfigs.forEach(function(config){
			loadPromises.push( Loader.loadSound(config) );
		});
		RSVP.all(loadPromises).then(resolve);

	});
};

Loader.imageConfigs = [];
Loader.addImages = function(imageConfigs){
	Loader.imageConfigs = Loader.imageConfigs.concat(imageConfigs);
};
Loader.loadImage = function(imageConfig){
	return new RSVP.Promise(function(resolve){
		const id = imageConfig.id;
		fetch(imageConfig.src)
			.then(response => response.blob())
			.then(blobData => createImageBitmap(blobData))
			.then(bitmap => {
				bitmap.hackSrc = imageConfig.src;
				Library.images[id] = bitmap;
				publish("assetLoaded");
				resolve();
			})
	});
};

Loader.sceneSources = [];
Loader.addScenes = function(sceneSources){
	Loader.sceneSources = Loader.sceneSources.concat(sceneSources);
};
Loader.loadScene = function(src){
	var loadDataPromise = new RSVP.Promise(function(resolve){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", src);
		xhr.onload = function() {
		    if(xhr.status===200){
		    	publish("assetLoaded");
		    	resolve();
		    }
		};
		xhr.send();
	});
};

Loader.soundConfigs = [];
Loader.addSounds = function(soundConfigs){
	Loader.soundConfigs = Loader.soundConfigs.concat(soundConfigs);
};
Loader.loadSound = function(soundConfig){
	return new RSVP.Promise(function(resolve){
		var sound = new Howl({
			src: [soundConfig.src]
		});
	var id = soundConfig.id;
		sound.once("load",function(){
			publish("assetLoaded");
			resolve();
		});
	});
};
