var galaxy = [];
var maxStars = 400;
var offset = 100;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  stroke(255);
  strokeWeight(4)
  for (let i=0;i<maxStars;i++) {
    galaxy[i] = new star();

  }
}


function draw() {
  // put drawing code here
  background(0);
  for (let i=1;i<galaxy.length;i++) {
    galaxy[i].update();

  }
  strokeWeight(0);
  fill(255)
  text("I always thought star field animations looked really cool, so I made one of my own.",32,32)
  text("I ended up doing it completely wrong and freezing my computer, so I used a tutorial on YouTube to finish it.",32,56)
}

function star() {
  this.x = random(-width/2,width/2);
  this.y = random(-height/2,height/2);
  this.z = random(0,width);
  
  this.update = function() {
    if (this.z < 0) {
      this.z = random(0,width);
    }
    else {
      this.z-=20;
    }
    this.sx = map(this.x/this.z,0,1,0,width) + width/2;
    this.sy = map(this.y/this.z,0,1,0,height) + height/2 ;
    this.r = map(this.z, 0, width, 4, 0)
    strokeWeight(this.r);
    point(this.sx,this.sy);
  }
}
