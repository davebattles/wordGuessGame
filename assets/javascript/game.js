
/* ---- particles.js config ---- */

var wd = "";
var guesses = 0;
var current = [];
var misses = [];
var newgame = true;
var wins = 0;

function starting(x) {
	var blanks = [];
	for (var i = 0; i < x.length; i++) {
		blanks.push('_');
	}
	return blanks;
}

function makeString(fuu) {
	var out = "";
	for (var i = 0; i < fuu.length; i++) {
		out = out + fuu[i] + " ";
	}
	return out;
}
var bank = ["aliens","nebula","complex","unidentified","obama","magnets","government","abduction","probe","martian"];
document.onkeyup = function (event) {
	var userGuess = event.key;
	var guess = userGuess.toLowerCase();
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'
	];
	if (newgame === true) {
		newgame = false;
		wd = bank[Math.floor(Math.random() * bank.length)];
		guesses = 10;
		current = starting(wd);
		
		misses = [];
	} else if (letters.indexOf(guess) > -1) {
		if (wd.indexOf(guess) < 0) {
			guesses--;

			if (guesses <= 0) {
				newgame = true;

			} else {
				misses.push(guess);
			}

		} else {
			for (var i = 0; i < current.length; i++) {
				if (guess === wd[i]) {
					current[i] = wd[i];
				}
			}
			if (current.indexOf("_") === -1) {
				console.log("you win with " + makeString(current));
				wins++;
				newgame = true;
			}
		}
	}

	var htmlword = makeString(current);
	var htmlmisses = makeString(misses);
	var htmlscores = "<p>Guesses Left: " + guesses + "</p>" +
		"<p>Wins: " + wins + " </p>";

	document.querySelector("#word").innerHTML = htmlword;
	document.querySelector("#used").innerHTML = htmlmisses;
	document.querySelector("#wins").innerHTML = htmlscores;


};