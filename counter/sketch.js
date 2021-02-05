function setup() {
  // put setup code here
  createCanvas(1200,200);
  textSize(64);
}

function draw() {
  // put drawing code here
  background(255);
  var time = millis();
  print(time);
  text(time,32,64);
  text("This is printing in the console too!",32,128);
  
}