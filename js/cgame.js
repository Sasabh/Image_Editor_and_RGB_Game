var nsq = 6;
var colors = [];
var pickedColor;
var sq = document.querySelectorAll(".square");
var cd = document.getElementById("rgbdisp");
var msgdisp = document.getElementById("message");
var head = document.querySelector("h1");
var resetbtn = document.getElementById("reset");
var modebtn = document.querySelectorAll(".mode");

init();
function init() {
		setupmodebtn();
		setupsq();
		resetpage();
}
resetbtn.addEventListener("click",function(){
	resetpage();
});
function setupsq() {
	for (var i = 0; i < sq.length; i++) {
		sq[i].addEventListener("click",function(){
		var colorClicked = this.style.background;
		if (colorClicked===pickedColor) 
			{	msgdisp.textContent = "Correct";
				changeColor(colorClicked);
				head.style.background = colorClicked;
				resetbtn.textContent = "Play Again?";
			} 
		else 
			{	this.style.background = "#232323";
			msgdisp.textContent = "Try Again";	
			}
			});
		}
}
function setupmodebtn() {
	for (var i = 0; i < modebtn.length; i++) {
		modebtn[i].addEventListener("click",function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? nsq = 3: nsq = 6;
			resetpage();
				});
		}
}
function resetpage() {
	colors = grandomColors(nsq);
	// pick an new color from array
	pickedColor = pickColor();
	//change colordisplay
	cd.textContent = pickedColor;
	msgdisp.textContent = "";
	// chang the color of squares
	for (var i = 0; i < sq.length; i++) {
	//add initial colr to squares
	if(colors[i])
		{	sq[i].style.display = "block";
			sq[i].style.background = colors[i];}
	else
		{sq[i].style.display = "none";}
	}
	head.style.background = "steelblue";
	resetbtn.textContent = "New Colors";
}


function changeColor(colors) {
	for (var i = 0; i < sq.length; i++) {
		sq[i].style.background = colors ;
	}
}
function pickColor() {
	var r = Math.floor(Math.random() * colors.length );
	return colors[r];
}
function grandomColors(num) {
	// make an array
	var arr = []
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		arr[i]=randomColor();
	}
	// return that array
	return arr;
}
function randomColor() {
	// pick a red
	var r = Math.floor(Math.random() * 256 );
	// pick a green
	var g = Math.floor(Math.random() * 256 );
	// pick a blue
	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r + ", "  + g + ", " + b + ")"
}