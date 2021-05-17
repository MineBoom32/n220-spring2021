// Note for the professor: I decided to learn p5.sound on my own to give this project a little oomph.
let dropSound;
let breakSound;
let tickSound;
let riseSound;
function preload() {
  soundFormats("mp3", "ogg");
  dropSound = loadSound("sound/drop");
  breakSound = loadSound("sound/break");
  tickSound = loadSound("sound/tick");
  riseSound = loadSound("sound/rise");
  levelUpSound = loadSound("sound/levelup");
  mainMusic = loadSound("sound/mainMusic");
  dangerMusic = loadSound("sound/dangerMusic");
  bgImage = loadImage("images/bg.png");
}

// Setting placeholders
var musicSlider;
var soundSlider;
var muteCheckbox;

// Level variables
  var level
  var levelLength
  var blocksToNextLevel
  var blockDelay
  var activeDelay
function resetLevel() {
  level = 1
  levelLength = 50
  blocksToNextLevel = levelLength
  blockDelay = 45;
  activeDelay = blockDelay;
}
resetLevel();

// Level up
function levelUp() {
  level++;
  blockDelay = Math.ceil(blockDelay * 0.9);
  levelLength = Math.ceil(levelLength * 1.2);
  blocksToNextLevel = levelLength;
  levelUpSound.play();
}

var gameState = 0; // 0 = title, 1 = in-game, 2 = game over

// Scoring variables
var score = 0;
var highScore = 0;
var chainCount = 0;
var displayedChain = 0; // Chain number meant for display purposes, must not be reset
var chainCooldownStart = 180;
var chainCooldownTimer = 0;

// Variables for drawing
var offsetX = 200;
var offsetY = 64;
var scalar = 32;
var colors = ["#ffffff", "#dd4444", "#44aa44", "#4444aa", "#cccc44"];
var colorPreviews = ["#ffffff88", "#dd444488", "#44aa4488", "#4444aa88", "#cccc4488"];
var ghostCellY = 0;
var ghostCellX = 0;

// Variables for the danger state
var isInDanger = false;
var dangerRedAlpha = 0;
var redAlphaChangeIncrement = -5;

var grid = [];
// Create all the grid cells to be used for the game
for (x=0; x<8; x++) {
  grid[x] = []
  for (y=0; y<12; y++) {
    grid[x][y] = new block();
    grid[x][y].positionX = x;
    grid[x][y].positionY = y;
  }
}


// Variables for the rising row system
var newRowColors = [0, 0, 0, 0, 0, 0, 0, 0]
var rowTimer =  (activeDelay * 9) + 60;

// Variables for aiming
var colorToDrop = 1;
var aimColumn = 4;

function setup() {
  // put setup code here
  createCanvas(800,550);
  fill(0,0,255);
  textFont("arial");

  // Setting handlers
  musicSlider = document.getElementById("musicVolumeSlider");
  soundSlider = document.getElementById("soundVolumeSlider");
  muteCheckbox = document.getElementById("muteCheckbox");
}



function mousePressed() {

  if (mouseY <= height) {
    // Places block if the game has started
    if (gameState == 1) {
      for (y=11; y>=0; y--) {
        // Look for adjacent blocks of the same color before fully placing the new block
        function scanBlock(block) {
          // If an adjacent block is found, score is added and the 
          if (block.color == colorToDrop) {
            breakSound.play();
            clearBlock(grid[aimColumn][y],aimColumn,y);
            // As this is recursive, it won't finish until every adjacent block is cleared.
            console.log("Chain was " + chainCount);
            score += (10 * (2**chainCount) ); // More points are earned from a higher chain count
            displayedChain = chainCount; // Sets the chain number to be displayed
            chainCount = 0; // Resets the chain counter 
            chainCooldownTimer = chainCooldownStart; // Starts the countdown for the chain display timer
            gravity();
            return true
          }
          else {
            return false
          }
        }
        
        console.log("Drop!");
        if (grid[aimColumn][y].color == 0) {
          // Check below
          if (grid[aimColumn][y+1]) {
            var check = scanBlock(grid[aimColumn][y+1]);
            if (check == true) {
              break
            }
          }
          // Check to the right
          if (grid[aimColumn+1]) {
            var check = scanBlock(grid[aimColumn+1][y]);
            if (check == true) {
              break
            }
          }
          // Check to the left
          if (grid[aimColumn-1]) {
            var check = scanBlock(grid[aimColumn-1][y]);
            if (check == true) {
              break
            }
          }
          grid[aimColumn][y].color = colorToDrop;
          console.log("Changed block color at X = " + aimColumn + ", Y = " + y + " to color " + colorToDrop);
          dropSound.play();
          break
        }
      }
    }
    // Otherwise, starts the game
    else {
      for (x=0; x<8; x++) {
        for (y=0; y<12; y++) {
          grid[x][y].color = 0;
        }
        newRowColors[x] = 0;
      }
      score = 0;
      displayedChain = 0;
      gameState = 1;
      resetLevel();
    }

    // Chooses a new color after dropping a block
    colorToDrop = ( Math.floor(Math.random() * 4) + 1 );
    }
  
}

function gravity() {
  var spaceFound = false; // Switched to true if an empty space is found below a filled cell
  // Look for empty spaces in each cell below the top row, push above cells into them if found
  for (x=0; x<8; x++) {
    for (y=1; y<12; y++) {
      var colorNum = grid[x][y].color;
      var colorAbove = grid[x][y-1].color;
      if ( (colorNum == 0)&&(colorAbove > 0) ) {
        spaceFound = true;
        grid[x][y].color = colorAbove;
        grid[x][y-1].color = 0;
      }
    }
  }
  // If an empty space was filled, repeat the function until there are none left
  if (spaceFound == true) {
    gravity()
  }
}

function clearBlock (object,canBreakUp) {

  chainCount++; // Adds to the chain count by 1; this adds up due to the function's recursiveness!
  blocksToNextLevel--;
  if (blocksToNextLevel <= 0) {
    levelUp();
  }

  // Retrieves the x and y positions (on the cell grid) of the block
  var xPos = object.positionX;
  console.log(xPos);
  var yPos = object.positionY;
  
  // Resets the cell's color
  object.color = 0;

  // Grabs the cells above and below the cell being cleared, and placeholders for the lwft and right
  var below = grid[xPos][yPos+1];
  var above = grid[xPos][yPos-1];
  var left;
  var right;
  // If a cell exists to the left of the cell being cleared, put it over the placeholder
  if (grid[xPos-1]) {
    left = grid[xPos-1][yPos];
  }
  // Do the same with the right
  if (grid[xPos+1]) {
    right = grid[xPos+1][yPos];
  }
  
  // Clear adjacent cells of the same color if they exist
  console.log(below + above + left + right)
  if (typeof below == "object") {
    if (below.color == colorToDrop) {
      clearBlock(below, false); // See the note on line 178.
    }
  }
  if (canBreakUp) { // This if statement is here to fix a strange recursion error.
    if (typeof above == "object") {
      if (above.color == colorToDrop) {
        clearBlock(above, true);
      }
    }
  }
  if (left) {
    if (left.color == colorToDrop) {
      clearBlock(left, true);
    }
  }
  if (right) {
    if (right.color == colorToDrop) {
      clearBlock(right, true);
    }
  }
}

function draw() {
  // put drawing code here
  background(255);
  strokeWeight(1);

  image(bgImage, 0, 0);

  // Apply volume settings  
  var soundVolume = Number(soundSlider.value);
  var musicVolume = Number(musicSlider.value);
  var muted = muteCheckbox.checked
  // console.log(muted);
  if (muted == false) {
    dropSound.setVolume(soundVolume);
    breakSound.setVolume(soundVolume);
    tickSound.setVolume(soundVolume);
    riseSound.setVolume(soundVolume);
    mainMusic.setVolume(musicVolume);
    dangerMusic.setVolume(musicVolume);
  }
  else {
    dropSound.setVolume(0);
    breakSound.setVolume(0);
    tickSound.setVolume(0);
    riseSound.setVolume(0);
    mainMusic.setVolume(0);
    dangerMusic.setVolume(0);
  }
  
  if (gameState == 1) {
    var didBreak = false;
    
    // Danger related code
    for (x=0; x<8; x++) {
      
      
      // Checks each square in the column for a colored square
      for (y=0; y<3; y++) {
        if (grid[x][y].color != 0) {
          isInDanger = true;
          didBreak = true;
          break;
        }
      }
      if (didBreak == true) {
        break;
      }
      
    }

    if (didBreak == false) {
      isInDanger = false;
    }

    if (isInDanger == true) {
      if (mainMusic.isPlaying() == true) {
        mainMusic.pause();
        dangerMusic.loop();
      }
      if ( (redAlphaChangeIncrement == -5) && (dangerRedAlpha == 0) ) {
        redAlphaChangeIncrement = 5;
      }
      else if ( (redAlphaChangeIncrement == 5) && (dangerRedAlpha == 130) ) {
        redAlphaChangeIncrement = -5;
      }
      dangerRedAlpha += redAlphaChangeIncrement;
      background( 255, 0, 0, dangerRedAlpha )
    }
    else if ( (isInDanger == false) && (mainMusic.isPlaying() == false) ) {
      mainMusic.loop();
      dangerMusic.stop();
    }
    
    // Performs actions related to block adding in 30 frame intervals (if the game has started)
    if (rowTimer > 0) {
      rowTimer--;
    }
    else {
      if (blockDelay != activeDelay) {
        activeDelay = blockDelay;
      }
      rowTimer = (activeDelay * 9) + 60;
    }
    // Runs at sets of 10 (9?) intervals
    if (rowTimer % activeDelay == 0) {
      var tickNumber = 9 - (rowTimer / activeDelay);
      console.log(tickNumber);
      if ( (tickNumber < 9)&&(tickNumber > 0) ) {
        newRowColors[tickNumber-1] = ( Math.floor(Math.random() * 4) + 1 );
        tickSound.play();
      }
      // Adds a new row at every 9th interval, or "tick"
      if (tickNumber == 9) {
        for (x=0; x<8; x++) {
          // Top-out for game over!
          if (grid[x][0].color != 0) {
            gameState = 2;
            // High score saving
            if (score > highScore) {
              highScore = score;
            }
            mainMusic.stop();
            dangerMusic.stop();
            break;
          }
          // Pushes up the new row
          for (y=1; y<11; y++) {
            var colorNum = grid[x][y].color;
            var colorBelow = grid[x][y+1].color;
            grid[x][y].color = colorBelow;
            grid[x][y-1].color = colorNum;
          }
          grid[x][11].color = newRowColors[x];
          newRowColors[x] = 0;
          
        }
        riseSound.play();
      }
    }
  }
  

  // Redraw the cells
  for (x=0; x<8; x++) {
    for (y=0; y<12; y++) {
      // Get the fill color from the numerical color value
      var colorNum = grid[x][y].color;
      fill(colors[colorNum]);
      square( (x*scalar + offsetX), (y*scalar + offsetY), scalar );
    }
    
    if ( ( mouseX > (x*scalar + offsetX) ) && ( mouseX < (x*scalar + offsetX + 32) ) ) {
      
      aimColumn = x;
      // console.log("Mouse is in column " + x)

      // Draw the ghost block
    }
    var nextRowColorNum = newRowColors[x];
    fill(colors[nextRowColorNum]);
    rect( (x*scalar + offsetX), (12.5*scalar + offsetY), scalar, scalar/2 );
  }
  // Draw the block ready to be dropped above the grid
  fill(colors[colorToDrop]);
  square( (aimColumn*scalar + offsetX), 16, scalar);
  for (y=11; y>=0; y--) {
    // Show where the current block will be dropped
    if (grid[aimColumn][y].color == 0) {
      fill(colorPreviews[colorToDrop]);
      square( (aimColumn*scalar + offsetX), (y*scalar + offsetY), scalar );
      break
    }
  } 

  // Display scoring data
  fill(255);
  
  textAlign(LEFT);
  textSize(48);
  text("Score", 500, 100);
  text("High Score", 500, 225);
  text("Level", 50, 100);
  text("Next", 50, 225);
  textSize(32);
  text(score, 500, 150);
  text(highScore, 500, 275);
  text(level, 50, 150);
  text(blocksToNextLevel, 50, 275);

  // Display the chain counter
  if (chainCooldownTimer > 0) {
    if (displayedChain >= 4) {
      textSize(100);
      text(displayedChain, 500, 400);
      textSize(50);
      text("CHAIN", 500, 450);
    }
    chainCooldownTimer--;
  }

  // Display text pertaining to the gameState
  // Displays the "title screen" at state 0
  if (gameState == 0) {
    fill(255);
    strokeWeight(0);
    rect( offsetX - 5, 225, (scalar * 8) + 10, 75 )
    fill(0);
    textSize(48);
    textAlign(CENTER);
    text("Click To Start", 328, 275);
  }
  // Displays the game over screen at state 2
  else if (gameState == 2) {
    fill(255);
    strokeWeight(0);
    rect( offsetX - 5, 225, (scalar * 8) + 10, 125 )
    fill(0);
    textAlign(CENTER);
    textSize(48);
    text("Game Over", 328, 275);
    textSize(32);
    text("Click To Play Again", 328, 325);
  }
}
// The object prototype for all the cells
function block() {
  this.color = 0;
  this.positionX = 0;
  this.positionY = 0;
}