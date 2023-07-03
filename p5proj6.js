var r;
var b;
var g;
var color;

function setup(){
	createCanvas(windowWidth,windowHeight);
	// stroke(255)
	// strokeWeight(0.5)
	noStroke()
	background(75)
	


}

function draw(){
	r=mouseX;
	g=mouseX+mouseY-700;
	b=mouseY;
	newr=map(r,0,width,0,255)
	newg=map(g,0,(width+height-700),0,255)
	newb=map(b,0,height,0,255)

	console.log(newr)
	fill(newr,newg,newb)
	ellipse(mouseX,mouseY,105,105)
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}