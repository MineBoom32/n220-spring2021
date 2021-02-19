function setup() {
  // put setup code here
  createCanvas(800,600);
  angleMode(DEGREES);
}

var counter = 0;
var dropsX = [];
var dropsY = [];

function draw() {
  // put drawing code here
  background(255);
  fill(0,0,255);
  if (counter == 9) {
    counter = 0;
  }
  else {
    counter++;
  }
  console.log(counter);
  if (counter == 0) {
    var newX = random(0,width);
    dropsX.push(newX);
    dropsY.push(0);
    console.log(dropsX[0]);
    console.log(dropsY[0]);
  }

  if (dropsY[0] >= height) {
    dropsX.shift();
    dropsY.shift();
  }
  for (i=0;i<dropsX.length;i++) {
    circle(dropsX[i],dropsY[i],10);
    dropsY[i] += 5;
  }
}

