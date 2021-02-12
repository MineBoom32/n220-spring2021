function setup() {
  // put setup code here
  createCanvas(800,600);
  b1 = new ball(300,300,255,0,0);
  b2 = new ball(500,300,0,0,255);
}

//Changes the speed of the ball
var distance = 100;
var duration = 25;

//Do not touch for any reason other than for debugging
var ticker = 0;

function draw() {
  // put drawing code here
  background(255);
  if (ticker >= duration) {
    ticker = 0;
    b1.update();
    b2.update();
  }
  else {
    ticker++;
  }
  b1.display();
  b2.display();
}

function ball (startX, startY, red, green, blue) {
  this.xPos = startX;
  this.yPos = startY;
  this.xDir = 0
  this.yDir = 0
  this.r = red;
  this.g = green;
  this.b = blue;

  this.update = function() {
    this.xDir = random(-1,1);
    this.yDir = random(-1,1);
  }

  this.display = function() {
    fill(this.r,this.g,this.b);
    circle(this.xPos,this.yPos,50);
    this.xPos += this.xDir * (distance/duration);
    this.yPos += this.yDir * (distance/duration);
    this.xPos = constrain(this.xPos,0,width);
    this.yPos = constrain(this.yPos,0,height);
  }
}
