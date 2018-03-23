var colorBoxList = document.querySelectorAll(".colorBox");
var colorDisplay = document.getElementById("RGB");
var choiceFeedback = document.getElementById("correctOrWrong");

function generateColors() {
	
	for (var i = 0; i < colorBoxList.length; i++) {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var rgb = "rgb(" + r + "," + g + "," + b + ")";
		colorBoxList[i].style.backgroundColor = rgb;
		console.log(rgb);
	}
}

function pickRandomOption() {
	var randomChoice = Math.floor(Math.random() * 6);
	colorDisplay.textContent = colorBoxList[randomChoice].style.backgroundColor;
}

generateColors();
pickRandomOption();

for (var i = 0; i < colorBoxList.length; i++){
	colorBoxList[i].addEventListener("click", function() {
		var selectedColor = this.style.backgroundColor;
		if (selectedColor === colorDisplay.textContent){
			choiceFeedback.textContent = "Correct!";
		}
		else{
			choiceFeedback.textContent = "Wrong! Try Again!";
			this.style.backgroundColor = "rgb(35,35,35)";
		}
	})
}