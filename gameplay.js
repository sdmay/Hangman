
// 10 guesses allowed

// Log incorrect guess- Insert letter in formation if correct

// If they miss 10 they add a losss

// If they get the answer right they show a win

// After either win or loss reset the game

var word = ["apple", "egg", "fish", "zebra", "california"];
var selected = "";
var numBlanks = [];
var numLetters = [];
var blanks = 0;
var win = 0;
var loss = 0;
var guessRemaining = 0;
var lettersGuessed = [];
var random = word[Math.floor(Math.random() * word.length)];

$(document).ready();

function startGame() {
    numLetters = random.split("");
    console.log(numLetters);

    for (var i = 0; i < numLetters.length; i++) {
        numBlanks.push("_ ");
    }


}


document.getElementById('wordtoget').innerHTML = numBlanks.join(" ");
document.getElementById('lettersGuessed').innerHTML = guessRemaining;
document.getElementById('win').innerHTML = win;
document.getElementById('loss').innerHTML = loss;


function checkLetter(letter){


	var isLetter = false;

	for (var i = 0; i < blanks; i++) {
		if(selected[i] == letter){
			isLetter = true;
			alert("letter found");
		}

		}

}

startGame();

//display underscores per letter in word
$("#wordtoget").html(numBlanks);


document.onkeyup = function(event) {
	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(lettersGuessed);
	console.log(lettersGuessed);
}

