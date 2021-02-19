function setup() {
  // put setup code here
  createCanvas(900,600);
  angleMode(DEGREES);
  noStroke();
}

var segmentsX = []
var segmentsY = []

function draw() {
  // put drawing code here
  background(255);
  fill(255,128,0)
  if (segmentsX.length > 10) {
    segmentsX.shift()
    segmentsY.shift()
  }
  segmentsX.push(mouseX)
  segmentsY.push(mouseY)
  for (i=0; i<segmentsY.length; i++) {
    circle(segmentsX[i],segmentsY[i],30)
  }
}

