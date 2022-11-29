window._ = {};
window.Game = {};
Game.sections = {};
Game.queue = [];
Game.dom = $("#game_container");
Game.wordsDOM = $("#game_words");
Game.choicesDOM = $("#game_choices");
Game.canvas = $("#game_canvas");
window.SceneSetup = {}; 
window.bb = function () {
	publish("bb", arguments);
};
window.hong = function () {
	publish("hong", arguments);
};
window.attack = function (damage, type) {
	publish("attack", ["hong", damage, type]);
	_["attack_" + type + "_ch" + _.CHAPTER]++; 
};
Game.init = function () {
	window.HP = new HitPoints();
	console.log("init");
	var animloop = function () {
		Game.update();
		requestAnimationFrame(animloop);
	};
	requestAnimationFrame(animloop);
};
Game.parseSceneMarkdown = function (md) {
	md = md.trim().replace(/\r/g, "");
	md = "\n" + md;
	var sections = md.split(/\n\#\s*/);
	sections.shift();
	sections.forEach(function (section) {
		var split_index = section.indexOf("\n\n");
		var id = section.slice(0, split_index).toLocaleLowerCase();
		var text = section.slice(split_index + 2);
	});
};
Game.executeNextLine = function () {
	var originalLine = Game.queue.shift();
	if (!originalLine) return;
	line = Game.parseLine(originalLine);
	var promiseNext;
	if (line == "") {
		promiseNext = Game.immediatePromise();
	} else {
		var lineType = Game.getLineType(line);
		switch (lineType) {
			case "text":
				promiseNext = Game.executeText(line);
				break;
			case "choice":
				promiseNext = Game.executeChoice(line);
				break;
			case "code":
				promiseNext = Game.executeCode(line);
				break;
			case "wait":
				promiseNext = Game.executeWait(line);
				break;
		}
	}
};
Game.clearQueue = function () {
	Game.queue = [];
};
Game.addToQueue = function (line) {
	Game.queue.push(line);
}
Game.executeText = function (line) {
	return new RSVP.Promise(function (resolve) {
		var regex = /^([^\:]+)\:(.*)/
		var speaker = line.match(regex)[1].trim();
		var dialogue = line.match(regex)[2].trim();
		// Add the bubble, with animation
		var div = document.createElement("div");
		Game.wordsDOM.appendChild(div);
		Game.WHO_IS_SPEAKING = speaker; // WHO'S SPEAKING?!
		Game.CURRENT_SPEAKING_SPEED = Game.OVERRIDE_TEXT_SPEED;
		if (Game.OVERRIDE_FONT_SIZE) {
			div.style.fontSize = Game.OVERRIDE_FONT_SIZE + "px";
		}
		switch (speaker) {
			case "b":
				div.className = "beebee-bubble";
				break;
			case "h":
				div.className = "hong-bubble";
				break;
			case "h2": case "h3":
				div.className = "hong2-bubble";
				break;
			case "a":
				div.className = "al-bubble";
				break;
			case "s":
				div.className = "shire-bubble";
				break;
			case "r":
				div.className = "hunter-bubble";
				break;
			case "n":
				div.className = "narrator-bubble";
				break;
		}
		// Add the text
		var interval = 0;
		var SPEED = Math.round(Game.TEXT_SPEED / Game.OVERRIDE_TEXT_SPEED);
		if (Game.FORCE_TEXT_DURATION > 0) {
			SPEED = Math.round(Game.FORCE_TEXT_DURATION / dialogue.length);
		}
		if (speaker == "b" || speaker == "h" || speaker == "h2" || speaker == "h3" || speaker == "n3" || speaker == "r" || speaker == "a" || speaker == "s") {
			var span, chr;
			var isItalicized = false;
			for (var i = 0; i < dialogue.length; i++) {
				// Add letter span
				span = document.createElement("span");
				if (chr == "*") {
					// else, empty. can't NOT add span, coz screws up indexing.
				} else {
					span.innerHTML = isItalicized ? "<i>" + chr + "</i>" : chr;
				}
				span.style.opacity = 0;
				div.appendChild(span);
			}
			// Then REVEAL letters one-by-one
			for (var i = 0; i < dialogue.length; i++) {
				var chr = dialogue[i];
				// If it's the last char & it's "-", skip
				if (i == dialogue.length - 1 && chr == "-") break;
				// for scopin'
				(function (index, interval, speaker, forceNoSound) {
					Game.setTimeout(function () {
						// Show it
						div.children[index].style.opacity = 1;
						if (!forceNoSound) {
							var chr = div.children[index].innerHTML;
							if (chr != " ") {
								if (speaker == "h" || speaker == "h2") {
									voice("hong", { volume: 0.3 });
								}
								if (speaker == "b" || speaker == "h3") {
									voice("beebee", { volume: 0.5 });
								}
								if (speaker == "n3") {
									voice("typewriter", { volume: 0.5 });
								}
								if (speaker == "r") {
									voice("hunter", { volume: 0.17 });
								}
								if (speaker == "a") {
									voice("al", { volume: 0.3 });
								}
								if (speaker == "s") {
									voice("shire", { volume: 0.4 });
								}
							}
						}
					}, interval);
				})(i, interval, speaker, Game.FORCE_NO_VOICE);
			}
		}
		// Return overrides to default
		Game.OVERRIDE_TEXT_SPEED = 1;
		Game.OVERRIDE_FONT_SIZE = false;
		Game.FORCE_TEXT_DURATION = -1;
		Game.FORCE_NO_VOICE = false;
		if (!Game.FORCE_CANT_SKIP) {
			if (Game.CLICK_TO_ADVANCE) {
				Game.setTimeout(function () {
					publish("show_click_to_advance");
				}, interval + Game.TEXT_SPEED * 2);
			}
		}
	});
}
// CHOICE UI SOUNDS
Loader.addSounds([
	{ id: "ui_show_choice", src: "sounds/ui/show_choice.mp3" },
	{ id: "ui_click", src: "sounds/ui/click.mp3" },
	{ id: "ui_hover", src: "sounds/ui/hover.mp3" }
]);
// Execute choice! Add it to choice DOM.
Game.OVERRIDE_CHOICE_LINE = false;
Game.OVERRIDE_CHOICE_SPEAKER = null;
Game.OVERRIDE_FONT_SIZE = false;
Game.executeChoice = function (line) {
	var choiceText = line.match(/\[([^\]]*)\]/)[1].trim();
	var choiceID = line.match(/\(\#([^\)]*)\)/);
	choiceText = choiceText.replace("#play1#", "<div class='mini-icon' pic='play1'></div>");
	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.setAttribute("speaker", Game.OVERRIDE_CHOICE_SPEAKER ? Game.OVERRIDE_CHOICE_SPEAKER : "b");
	Game.OVERRIDE_FONT_SIZE = false;
	return new RSVP.Promise(function (resolve) {
		Game.setTimeout(resolve, 100);
	});
}
// Execute code!
Game.executeCode = function (line) {
	var code = line.match(/\`+([^\`]*)\`+/)[1].trim();
	try {
		eval(code);
	} catch (e) {
		console.log(e);
	}
	// Return immediate promise
	return Game.immediatePromise();
}