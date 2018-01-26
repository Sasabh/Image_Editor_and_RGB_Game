var image = null;
var canvas;
var imagefile;
function uploadimage() {
	imagefile = document.getElementById("uimg");
	canvas = document.getElementById("mycanvas");
	image = new SimpleImage(imagefile);
	image.drawTo(canvas);
}
function reset(){
	resetcan(canvas);
}
function resetcan(canvas) {
	if(image!=null) {
		image.drawTo(canvas);
		canvas.setAttribute(
   "style", "filter: brightness(100%) contrast(100%) blur(0px) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)");
	}
	else {
		alert("Please upload the image first!");
	}
}
function clearCanvas() {
  doClear(canvas);
}

function doClear(canvas) {
	image = null;
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width,canvas.height);
	imagefile.value = "";
	canvas.setAttribute("style", "filter: brightness(100%) contrast(100%) blur(0px) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)");
}
function set(){
	editImage(canvas);
}
function editImage(canvas) {
	var fbr = document.querySelector("#fbr").value;
	var fco = document.querySelector("#fco").value;
	var fbl = document.querySelector("#fbl").value;
	var fgr = document.querySelector("#fgr").value;
	var fhu = document.querySelector("#fhu").value;
	var fin = document.querySelector("#fin").value;
	var fop = document.querySelector("#fop").value;
	var fsa = document.querySelector("#fsa").value;
	var fse = document.querySelector("#fse").value;
	canvas.setAttribute(
   "style", "filter: brightness("+ fbr +"%) contrast("+ fco +"%) blur("+ fbl +"px) grayscale("+ fgr +"%) hue-rotate("+ fhu +"deg) invert("+ fin +"%) opacity("+ fop +"%) saturate("+ fsa +"%) sepia("+ fse +"%)");
}
function save(){
	savefile(canvas);
}
function savefile(canvas){}


