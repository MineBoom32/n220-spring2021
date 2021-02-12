function setup() {
  // put setup code here
  createCanvas(800,50);
}

//Changes the speed of the ball
var distance = 25;
var circleSize = 20; //Must be smaller than the distance variable
var numberOfCircles = 25;
var xOffset = 15;
var yOffset = 15;

//Do not touch for any reason other than for debugging


function draw() {
  // put drawing code here
  for (i=0;i<numberOfCircles;i++) {
    if ((i+1)%3 == 0) {
      if ((i+1)%5 == 0) {
        fill(0,0,255);
      }
      else {
        fill(255,0,255);
      }
    }
    else if ((i+1)%5 == 0) {
      fill(0,255,0);
    }
    else {
      fill(0,0,0);
    }
    circle(distance*i + xOffset, yOffset, circleSize);
  }
  
}