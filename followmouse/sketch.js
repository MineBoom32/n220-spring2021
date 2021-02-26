//Create an application in P5 that changes a circle to one of four different colors in an array when its clicked.

function setup() {
  // put setup code here
  createCanvas(800,600);
}

var circleX = 400;
var circleY = 300;

function draw() {
  // put drawing code here
  var diffX = circleX - mouseX;
  var diffY = circleY - mouseY;
  getColor(diffX,diffY);
  if (diffX > 0) {
    circleX -= 3;
  }
  else if (diffX < 0) {
    circleX += 3;
  }
  if (diffY > 0) {
    circleY -= 3;
  }
  else if (diffY < 0) {
    circleY += 3;
  }
  background(255)
  circle(circleX,circleY,50)
}

function getColor(x,y) {
  var diffXpow = Math.pow(x,2);
  // console.log(diffXpow);
  var diffYpow = Math.pow(y,2);
  var pythagorean = Math.sqrt(diffXpow + diffYpow);
  // console.log(pythagorean);
  if (Math.abs(pythagorean)<7) {
    fill(0);
  }
  else {
    fill(255,0,0);
  }
}