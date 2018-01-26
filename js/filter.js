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
		canvas.className = "";
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
 }
 function addfilter(caseno){
	 switch(caseno)
	 {
	 	case 1: canvas.className = "";
	 			canvas.className += "f1977";
	 			break;
	 	case 2: canvas.className = "";
	 			canvas.className += "faden";
	 			break;
	 	case 3: canvas.className = "";
	 			canvas.className += "famaro";
	 			break;
	 	case 4: canvas.className = "";
	 			canvas.className += "fbrannan";
	 			break;
	 	case 5: canvas.className = "";
	 			canvas.className += "fbrookyln";
	 			break;
	 	case 6: canvas.className = "";
	 			canvas.className += "fclarendon";
	 			break;
	 	case 7: canvas.className = "";
	 			canvas.className += "fearlybird";
	 			break;
	 	case 8: canvas.className = "";
	 			canvas.className += "fgingham";
	 			break;
	 	case 9: canvas.className = "";
	 			canvas.className += "fhudson";
	 			break;
	 	case 10:canvas.className = "";
	 			canvas.className += "finkwell";
	 			break;
	 	case 11:canvas.className = "";
	 			canvas.className += "flofi";
	 			break;
	 	case 12:canvas.className = "";
	 			canvas.className += "fmaven";
	 			break;
	 	case 13:canvas.className = "";
	 			canvas.className += "fperptua";
	 			break;
	 	case 14:canvas.className = "";
	 			canvas.className += "freyes";
	 			break;
	 	case 15:canvas.className = "";
	 			canvas.className += "fstinson";
	 			break;
	 	case 16:canvas.className = "";
	 			canvas.className += "ftoaster";
	 			break;
	 	case 17:canvas.className = "";
	 			canvas.className += "fwalden";
	 			break;
	 	case 18:canvas.className = "";
	 			canvas.className += "fvalencia";
	 			break;
	 	case 19:canvas.className = "";
	 			canvas.className += "fxpro";
	 			break;
 	}
 }