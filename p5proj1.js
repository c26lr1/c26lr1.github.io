
function setup(){
	createCanvas(windowWidth,windowHeight);
	

}
var p;
function draw(){
	p=random(256);
	fill(random(256), random(256),random(256) ); 
	stroke(random(256),random(256),random(256));
	strokeWeight(2)

	circle(random(width),random(height),random(10,101))

}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}