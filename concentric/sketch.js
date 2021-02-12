function setup() {
  // put setup code here
  createCanvas(400,400);
}

//Changes the speed of the ball
var numberOfCircles = 40;

//Do not touch for any reason other than for debugging


function draw() {
  // put drawing code here
  background(192);
  for (i=numberOfCircles;i>0;i--) {
   circle(width/2,height/2,(width/numberOfCircles)*i) ;
  }
  
}