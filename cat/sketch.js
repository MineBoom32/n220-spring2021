function setup() {
  // put setup code here
  createCanvas(800,600)
  angleMode(DEGREES)
}

var white = 255;
var gray = 120;

function draw() {
  // put drawing code here
  strokeWeight(1);
  fill(white);
  background(50);
  rect(200, 250, 400, 175);
  triangle(200,425,250,425,200,525);
  fill(gray);
  rect(200,475,25,50);
  fill(white);
  triangle(250,425,300,425,250,525);
  fill(gray);
  rect(250,475,25,50);
  fill(white);
  triangle(500,425,550,425,500,525);
  fill(gray);
  rect(500,475,25,50);
  fill(white);
  triangle(550,425,600,425,550,525);
  fill(gray);
  rect(550,475,25,50);
  fill(white);
  triangle(450,200,550,125,450,50);
  triangle(650,200,550,125,650,50);
  fill(200);
  triangle(460,180,535,125,460,70);
  triangle(640,180,565,125,640,70);
  fill(white);
  ellipse(550,200,200,200);
  fill(0);
  arc(515,175,25,50,45,315);
  arc(585,175,25,50,45,315);
  fill(200);
  beginShape();
  vertex(535,200);
  vertex(565,200);
  vertex(565,210);
  vertex(555,210);
  vertex(555,220);
  vertex(545,220);
  vertex(545,210);
  vertex(535,210);
  vertex(535,200);
  endShape();
  strokeWeight(4);
  line(550,250,535,265);
  line(535,265,520,265);
  line(520,265,510,255);
  line(550,250,565,265);
  line(565,265,580,265);
  line(580,265,590,255);
  strokeWeight(1);
  fill(white);
  beginShape();
  vertex(200,250);
  vertex(180,260);
  vertex(160,280);
  vertex(140,330);
  vertex(120,355);
  vertex(100,370);
  vertex(80,370);
  vertex(65,355);
  vertex(50,320);
  vertex(40,315);
  vertex(25,320);
  vertex(23,335);
  vertex(35,370);
  vertex(65,395);
  vertex(95,398);
  vertex(118,394);
  vertex(140,380);
  vertex(170,340);
  vertex(185,310);
  vertex(200,290);
  endShape();
  fill(gray);
  beginShape();
  vertex(80,370);
  vertex(65,355);
  vertex(50,320);
  vertex(40,315);
  vertex(25,320);
  vertex(23,335);
  vertex(35,370);
  vertex(65,395);
  endShape();
}