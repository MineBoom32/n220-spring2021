function setup() {
  // put setup code here
  createCanvas(800,600);
  angleMode(DEGREES);
}

var position = 400
var diameter = 100

function draw() {
  // put drawing code here
  background(255);
  fill(255,0,0);
  circle(position,300,diameter);
  if (position >= 800 + diameter/2) {
    position = -diameter/2;
  }
  else {
    position += 5;
  }
}