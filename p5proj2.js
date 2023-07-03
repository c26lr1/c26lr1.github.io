let t;
let increment = 0.001; 
function makeCircle(xPos, yPos, circleSize) { 
	let x = width * noise(t + xPos);
	let y = height * noise(t + yPos+300);
	let size = width * noise(t + circleSize);

	ellipse(x, y, size, size);

	t += increment;

}
function setup(){
	
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2);
	stroke(255);
	noFill();
	t = 0;
	frameRate(100)


}

function draw(){
	background(0,30);
	makeCircle(4,50,600)
	makeCircle(0,200,200)
	makeCircle(100,200,1)


}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}
