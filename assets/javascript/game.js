var crystal = {
	blue: 
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

var currentScore = 0;

var targetScore = 0;

var winCount = 0;

var lossCount = 0;



// functions

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

	// reset current score

	currentScore = 0

	// set new target score between 19 and 120

	targetScore = getRandom(19,120);

	// set different values for crystals between 1-12

	crystal.blue.value 		= getRandom(1, 12);
	crystal.red.value 		= getRandom(1, 12);
	crystal.green.value 	= getRandom(1, 12);
	crystal.yellow.value 	= getRandom(1, 12);

	// change html to reflect all of these changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	// testing console
	console.log("-------------")
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
	console.log("-------------")
}

// respond to clicks on the crystals

var addValues = function(crystal) {

	// change currentScore
	currentScore = currentScore + crystal.value;

	// change the HTML to reflect changes in currentScore
	$("#yourScore").html(currentScore);

	// Call the checkwinfunction
	checkWin();


// testing console
	console.log("Your Score: " + currentScore);
}

// check if user won or lost and reset the game
var checkWin = function() {

	// Check if currentScore is larger than targetScore
	if(currentScore > targetScore) {
		alert("You Lost!");
		console.log("You Lost");

		// add to loss counter
		lossCount++

		// Change loss count
		$("#lossCount").html(lossCount);

		// restart the game
		startGame();
	}

	else if (currentScore == targetScore) {
		alert("Congrats, you win!");
		console.log("You win");

		// add to win counter
		winCount++

		// Change the win count
		$("#winCount").html(winCount);

		// Restart the game
		startGame();
	}

}
// main process

// 
startGame();

$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#red").click(function() {
	addValues(crystal.red);
});

$("#green").click(function() {
	addValues(crystal.green);	
});

$("#yellow").click(function() {
	addValues(crystal.yellow);
});