//Create an application in P5 that changes a circle to one of four different colors in an array when its clicked.

function setup() {
  // put setup code here
  createCanvas(800,600);
}

var colors = ["#f54242","#eff542","#42f54e","#4263f5",];
var colorNames = ["Red","Yellow","Green","Blue"]
var nextColor = 1;
var mouseDebounce = false;

function draw() {
  // put drawing code here
  if ((mouseIsPressed) && mouseDebounce == false){
    mouseDebounce = true;
    changeColor();
  }
  else if ((!mouseIsPressed) && (mouseDebounce == true)) {
    mouseDebounce = false;
  }
  background(255);
  circle(400,300,400);
}

function changeColor() {
  nextColor = round(random(0,3));
  var colorHex = color(colors[nextColor]);
  fill(colorHex);
  console.log(colorNames[nextColor]);
  console.log(colorHex);
}