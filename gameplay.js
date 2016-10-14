var words = ["test", "hallelujah", "trump", "runner", "quest", "fridge"]
var wordOption = "";
var numLetters = [];
var emptySpace = 0;
var guessleft = [];
var incorrect = [];


var win = 0;
var loss = 0;
var left = 5;


function begin (){
	wordOption = words[Math.floor(Math.random() * words.length)];
	numLetters = wordOption.split("");
	emptySpace = numLetters.length;

	left = 5;
	incorrect = [];
	guessleft = [];

// Never would have gotten that .push

	for (var i=0; i<emptySpace; i++) {
		guessleft.push("_");
	}

	document.getElementById("wordtoget").innerHTML = guessleft.join(" ");

document.getElementById("left").innerHTML = left;
document.getElementById("win").innerHTML = win;
document.getElementById("loss").innerHTML = loss;


console.log(wordOption);
console.log(numLetters);
console.log(emptySpace);
console.log(guessleft);

}

function letterCheck(letter){
	
	var letterWord = false;

	for (var i = 0; i < emptySpace; i++) {
		if (wordOption[i] == letter) {
		letterword = true;
		alert("letter found")
	}
	}
}

for (var i = 0; i < emptySpace; i++) {
	if (wordOption[i] == letter){
		guessleft[i] == letter;
	}
}
	


 begin();

 document.onkeyup = function(game) {

 	var letterguessed = String.fromCharCode(event.keyCode).toLowerCase();
 	letterCheck(letterguessed);
 	console.log(letterguessed);
}