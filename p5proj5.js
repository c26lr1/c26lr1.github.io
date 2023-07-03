function setup(){
	createCanvas(windowWidth,windowHeight)
	rectMode(CENTER)
	angleMode(DEGREES)
}
let color;
let hsb;
function draw(){
	color=map(mouseX,0,width,0,255)


	rotationAmount=map(mouseX,0,width,0,360)
	background(0,15)
	stroke('white')
	strokeWeight(2)
	push()
	fill(color,100,150)
	translate(width/2,height/2)
	rotate(rotationAmount)
	rect(0,0,200,200)
	pop()
	
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}