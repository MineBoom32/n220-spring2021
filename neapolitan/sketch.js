function setup() {
  // put setup code here
  createCanvas(900,600);
  angleMode(DEGREES);
  noStroke();
}

var colors = ["#eba434","#ebeb34","#93eb34"];
console.log(colors.length);
console.log(colors[0]);

function draw() {
  // put drawing code here
  background(255);
  for (i=0;i<colors.length;i++) {
    var fillColor = color(colors[i]);
    // console.log(fillColor);
    fill(fillColor);
    rect(300*i,0,300,height);
  }
}

