var canvas1;
var canvas2;
var canvas3;
var canvas4;
var start = null;
var hide = null;
var Steganography= null;


function supload(){
canvas1=document.getElementById("scan");
var input1=document.getElementById("input1");
  start=new SimpleImage(input1);
  start.drawTo(canvas1);
}

function hupload(){
canvas2=document.getElementById("hcan");
var input2=document.getElementById("input2");
  hide=new SimpleImage(input2);
  hide.drawTo(canvas2);
}

function Merge(){
 start = theHidder(start);
  hide = theHidden(hide);

var cropWidth = start.getWidth();
if (hide.getWidth() < cropWidth) {
	cropWidth = hide.getWidth();
}
var cropHeight = start.getHeight();
if (hide.getHeight() < cropHeight) {
	cropHeight = hide.getHeight();
}
start = crop(start,cropWidth, cropHeight);
hide = crop(hide,cropWidth, cropHeight);

 Steganography= combine(start,hide);
 canvas3=document.getElementById("ccan");
  Steganography.drawTo(canvas3);
}
 

function Extract(){
 var extractee= extract(Steganography);
 canvas4=document.getElementById("ecan");
 extractee.drawTo(canvas4);
}

function clearBits(pixVal){
var x  = Math.floor(pixVal/16)*16;
return x;
}

function theHidder(image){
    for (var px of image.values()){
      px.setRed(clearBits(px.getRed()));
      px.setGreen(clearBits(px.getGreen()));
      px.setBlue(clearBits(px.getBlue()));
    }
return image;
}

function scoopBits(pixVal){
  var x = Math.floor(pixVal/16);
  return x;
}

function theHidden(image){
for (var px of image.values()){
      px.setRed(scoopBits(px.getRed()));
      px.setGreen(scoopBits(px.getGreen()));
      px.setBlue(scoopBits(px.getBlue()));
}
return image;
}

function newpv(p,q) {
     var answer = p + q;
     if (answer > 255){
     print("error: answer too big");
     }    
     return answer;
}

//FOR COMBINE
function combine(img1,img2){
 var newImage = new SimpleImage(img1.getWidth(), img1.getHeight());
for(var px1 of img1.values()){
    	var x = px1.getX();
      var y = px1.getY();
      var px2 = img2.getPixel(x,y);
      var npx = newImage.getPixel(x,y);
       
  npx.setRed(newpv(px1.getRed(),px2.getRed()));
  npx.setGreen(newpv(px1.getGreen(),px2.getGreen()));
  npx.setBlue(newpv(px1.getBlue(),px2.getBlue()));
     }
     return newImage;
}
function crop(image, width, height){
     var newImage = new SimpleImage(width,height);
     for(var px of image.values()){
   	   var x = px.getX();
   	   var y = px.getY();
  	   if (x < width && y < height){
       var npx = newImage.getPixel(x,y);// newImage-pixels
       npx.setRed(px.getRed());
       npx.setBlue(px.getBlue());
       npx.setGreen(px.getGreen()); 
}
     }
     return newImage;
}

function pixelExtract(pixVal){
    var x  = pixVal % 16;
    var y = x * 16;
    return y;
}
function extract(image){
    for (var px of image.values()){
       var x = pixelExtract(px.getRed());
       var y = pixelExtract(px.getGreen());
       var z = pixelExtract(px.getBlue());	
       px.setRed(x);
       px.setGreen(y);
       px.setBlue(z);
     }
    return image;
}