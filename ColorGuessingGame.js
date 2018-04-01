//Variables
var colorBoxList = document.querySelectorAll(".colorBox");
var colorDisplay = document.getElementById("RGB");
var choiceFeedback = document.getElementById("correctOrWrong");
var playAgain = document.getElementById("playAgain");
var gameHeader = document.getElementById("topHeader");
var gameMode = document.querySelectorAll(".gameMode");
var gameComplete = false;
//Variables end

//Functions
function generateColors(numberToGenerate) {
	
	for (var i = 0; i < numberToGenerate; i++) {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var rgb = "RGB(" + r + "," + g + "," + b + ")";
		colorBoxList[i].style.backgroundColor = rgb;
	}
}

function pickRandomOption(maxNumber) {
	var randomChoice = Math.floor(Math.random() * maxNumber);
	colorDisplay.textContent = colorBoxList[randomChoice].style.backgroundColor;
}

function setupGame(numColorBoxes) {
	generateColors(numColorBoxes);
	pickRandomOption(numColorBoxes);
	gameHeader.style.backgroundColor = "rgb(33, 137, 255)";
	choiceFeedback.textContent = "Select a color box";
	playAgain.textContent = "";
	gameComplete = false;

	for (var i = 3; i < colorBoxList.length; i++){
		if (numColorBoxes === 3){
			colorBoxList[i].classList.add("hide");
		}
		else{
			colorBoxList[i].classList.remove("hide");
		}
	}
}

function correctChoice(color) {
	choiceFeedback.textContent = "Correct!";
	playAgain.textContent = "Play Again?";
	gameHeader.style.backgroundColor = color;
	playAgain.addEventListener("click", function() {
		gameMode[0].classList.contains("selected") ? setupGame(3) : setupGame(6);
	});
}
//Functions end

//Click listeners for color boxes
for (var i = 0; i < colorBoxList.length; i++){
	colorBoxList[i].addEventListener("click", function() {
		var selectedColor = this.style.backgroundColor;
		if (selectedColor === colorDisplay.textContent){
			gameComplete = true;
			correctChoice(this.style.backgroundColor);
		}
		else if (!gameComplete){
			choiceFeedback.textContent = "Wrong! Try Again!";
			this.style.backgroundColor = "rgb(35,35,35)";
		}
	})
}

//Click listeners for game modes
for (var i = 0; i < gameMode.length; i++){
	gameMode[i].addEventListener("click", function() {
	gameMode[0].classList.remove("selected");
	gameMode[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "EASY" ? setupGame(3) : setupGame(6);
	});
}

setupGame(6);