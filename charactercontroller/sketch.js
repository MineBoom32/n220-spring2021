var playerCharacter;

function setup() {
  // put setup code here
  createCanvas(400,400);
  fill(0,0,255);
  playerCharacter = new character();
}



function draw() {
  // put drawing code here
  background(255);
  updateCharacter(playerCharacter);
}

function updateCharacter(object) {
  //Check for keyboard input
  if (keyIsPressed) {
    //If the pressed key is the up arrow key, move the circle's position up (subtract from the Y position)
    if (keyCode == UP_ARROW) {
      object.y -= 2;
    }
    //If the pressed key is the down arrow key, move the circle's position down (add to the Y position)
    if (keyCode == DOWN_ARROW) {
      object.y += 2;
    }
    //If the pressed key is the left arrow key, move the circle's position left (subtract from the X position)
    if (keyCode == LEFT_ARROW) {
      object.x -= 2;
    }
    //If the pressed key is the right arrow key, move the circle's position right (add to the X position)
    if (keyCode == RIGHT_ARROW) {
      object.x += 2;
    }
  }
  //Draw the circle at its new position
    circle(object.x,object.y,30);
}

function character() {
  this.x = 200;
  this.y = 200;
}