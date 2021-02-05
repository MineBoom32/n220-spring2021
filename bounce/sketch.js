function setup() {
  // put setup code here
  createCanvas(800,600);
  angleMode(DEGREES);
}

//Changes the speed of the ball
var speed = 5;

//Do not touch for any reason other than for debugging
var xDir = -1;
var yDir = 1;
var xPos = 400;
var yPos = 300;

function draw() {
  // put drawing code here
  background(255);
  fill(0,0,255)
  xPos += (xDir * speed)
  yPos += (yDir * speed)
  if (xPos >= width) {
    xDir = -1
  }
  else if (xPos <= 0) {
    xDir = 1
  }
  if (yPos >= height) {
    yDir = -1
  }
  else if (yPos <= 0) {
    yDir = 1
  }
  xPos = constrain(xPos,0,width)
  yPos = constrain(yPos,0,height)
  circle(xPos,yPos,60)
}