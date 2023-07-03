function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0);
  angleMode(DEGREES);

  for (let i = 0; i < width; i += 75) {
    for (let j = 0; j < height; j += 75) {
      // Create red ellipse pattern
      fill(255, 0, 0, 180);
      ellipse(i, j, 50, 50);
      fill('green')
      ellipse( i+50, j+50, 50, 50);
      fill('yellow')
      ellipse( i, j+50, 50, 50);
      fill('cyan')
      ellipse( i+50, j, 50, 50);

    }
  }

  for (let i = 0; i < width; i += 75) {
    for (let j = 0; j < height; j += 75) {

      // Create blue square pattern
      fill(0, 0, 255, 180);

      // TODO: Specify a center origin for the rectangle
      rect(i, j, 50, 50,);
      rectMode(CENTER)
      fill(260,150,197,200)
      rect( i+25,j+25,20,20,)
      rectMode(CORNER)
    }

  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
