function setup() {
  // put setup code here
  createCanvas(400,400);
}

var numberOfCircles = 40;


function draw() {
  // put drawing code here
  background(192);
  for (i=numberOfCircles;i>0;i--) {
   circle(width/2,height/2,(width/numberOfCircles)*i) ;
  }
  
}