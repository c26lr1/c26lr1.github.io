let sparkleX;
let sparkleY;
let sparkleSize;

let starY = 0;
let starSize = 6;
let increment=6;
var starX2 = 0;
var starY2 = 0;
var starSize2 = 6;
var starX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  fill(255);
  starX= width;


}

function draw() {
  background(0, 50);
  sparkleX = random(0, width);
  sparkleY = random(0, height);
  sparkleSize = random(0, 10);
  noStroke();
  ellipse(sparkleX, sparkleY, sparkleSize);
  ellipse(sparkleX, sparkleY, sparkleSize);
  ellipse(sparkleX, sparkleY, sparkleSize);

  shootingStarRTL();
  shootingStarLTR(6);
}

function shootingStarRTL() {
  noStroke();
  ellipse(starX, starY, starSize);
  starX = starX - increment;
  starY = starY + increment;
  starSize = starSize + 0.25;

  if (starX <= 0 || starY >= height) {
    // starX = width;
    // starY = 0;
    // starSize = 1;
    starSize=6
    increment=increment*-1
  }
  if (starX > width || starY < 0) {
    // starX = width;
    // starY = 0;
    // starSize = 1;
    starSize=6
    increment=increment*-1
  }
}
function shootingStarLTR(starSpeed) {
  noStroke();
  ellipse(starX2, starY2, starSize2);
  starX2 = starX2 + starSpeed;
  starY2 = starY2 + starSpeed;
  starSize2 = starSize2 + 0.25;
  if (starX2 > width || starY2 > height) {
    starX2 = 0;
    starY2 = 0;
    starSize2 = 1;
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}