var playerCharacter;

function setup() {
  // put setup code here
  createCanvas(600,400);
  fill(255, 181, 54);
  theBall = new ball();
}



function draw() {
  // put drawing code here
  background(189, 255, 253);
  update(theBall);
}

function update(object) {
  //Check if the ball is on either wall (This was originally two if statements, but I realized that I could handle both in one statement due to the way negation works.)
  if ((object.xPosition <= 15) || (object.xPosition >= width-15)) {
    //If so, bounce the ball off
    object.xVelocity = -object.xVelocity
  }
  
  //Check if the ball is touching the floor
  if (object.yPosition >= height-15) {
    //If so, bounce the ball off the floor
    object.yVelocity = -(object.yVelocity);
  }
  else {
  //Otherwise, increase its downward velocity
    object.yVelocity ++;
  }

  //Offset the ball's current position by its new velocities
  object.xPosition += object.xVelocity;
  object.yPosition += object.yVelocity;

  //Constrain the ball's position within the bounds of the canvas
  object.yPosition = constrain(object.yPosition,15,height-15);
  object.xPosition = constrain(object.xPosition,15,width-15);

  //Draw the ball at its new position
  circle(object.xPosition,object.yPosition,30);
}

function ball() {
  this.xPosition = 200;
  this.yPosition = 100;
  this.xVelocity = 6;
  this.yVelocity = 0;
}