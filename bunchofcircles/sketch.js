var playerCharacter;
var objectGroup = [];

function setup() {
  // put setup code here
  createCanvas(600,600);
  fill(0,255,0);
  //Add 100 objects to the group using the ball() object prototype
  for (i=0;i<100;i++) {
    console.log("Object " + i + " has been created");
    objectGroup[i] = new ball();
  }
}



function draw() {
  // put drawing code here
  background(189, 255, 253);
  //Call the update function for each individual object in the object group
  for (i=0;i<objectGroup.length;i++) {
    update(objectGroup[i])
  }
}

function update(object) {
  //Generate two random numbers between 0 and 1
  var xRoll = random();
  var yRoll = random();
  //If the first number is less than 0.5, move the object's position left, otherwise move it right by 1
  if (xRoll < 0.5) {
    object.xPosition--;
  }
  else {
    object.xPosition++;
  }
  //If the second number is less than 0.5, move the object's position up, otherwise move it down by 1
  if (yRoll < 0.5) {
    object.yPosition--;
  }
  else {
    object.yPosition++;
  }

  //Restrict the new positions so the objects don't leave the canvas
  object.xPosition = constrain(object.xPosition,0,width);
  object.yPosition = constrain(object.yPosition,0,height);

  //Draw the ball at its new position
  circle(object.xPosition,object.yPosition,30);
}

function ball() {
  this.xPosition = random(0,width);
  this.yPosition = random(0,height);
}