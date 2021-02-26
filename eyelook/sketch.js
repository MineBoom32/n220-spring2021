//Create an application in P5 that changes a circle to one of four different colors in an array when its clicked.

function setup() {
  // put setup code here
  createCanvas(800,800);
  angleMode(DEGREES);
}

//Variables for the sake of customization
var eyeSize = 200;
var pupilScale = 0.5;

function draw() {
  background(255);
  
  //Creates the main part of the face
  strokeWeight(4);
  fill(255, 255, 43);
  circle(400,400,700);

  //Makes a glasses rim
  strokeWeight(20);
  line(75,275,725,275);

  //Makes a mouth that reacts the mouse's Y position
  //Opens the mouth if the mouse cursor is above the half-way point, otherwise closes it
  if (mouseY > 400) {
    strokeWeight(10);
    fill(0,0,0,0);
  }
  else {
    strokeWeight(0);
    fill(0,0,0,255);
  }
  //Draws the mouth based on the above properties
  arc(400,500,500,300,0,180);
  
  //Drawing the eyes
  drawEye(150,200); //Draws the left eye
  drawEye(450,200); //Draws the right eye
}

function drawEye(x,y) { //Draws an eye at the specified x and y coordinates
  var pupilSize = width * pupilScale;
  
  //Prepares the coordinate system for drawing the eye
  push();
  translate(x,y);
  scale(eyeSize/width);
  
  //Make the eye white
  strokeWeight(width/eyeSize * 10); //Fixes the stroke weight, as it's affected by the scale() method as well as the coordinate system
  fill(255);
  square(0,0,width);

  //Make the pupil
  strokeWeight(0); //Since the pupils are pure black, they don't need a stroke.
  fill(0);
  circle(constrain(mouseX,pupilSize/2,width-pupilSize/2),constrain(mouseY,pupilSize/2,height-pupilSize/2),(width * pupilScale));
  pop();
}