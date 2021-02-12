function setup() {
  // put setup code here
  createCanvas(120,120);
  noStroke()
}

//Changes the number of steps
var steps = 4;
var blockSize = 25;
var xOffset = 10
var yOffset = 10
var distBetween = 1

//DO NOT TOUCH
var stepAmount = blockSize + distBetween

function draw() {
  // put drawing code here
  background(255);
  fill(255,0,0)
  for (i=0; i<steps; i++) {
    for (ii = 0; ii<=i; ii++) {
      square(stepAmount*ii + xOffset, stepAmount*i + yOffset, blockSize)
    }
  }
}