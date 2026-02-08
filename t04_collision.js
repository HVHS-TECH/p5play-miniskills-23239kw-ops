/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	world.gravity.y = 5;
	cnv = new Canvas(1000, 1000);
	Jcole = new Sprite(250, 200, 200, 500, 'd');
	Jcole.color = 'brown';
	Circle1 = new Sprite(200, 500, 200, 'd');
	Circle1.color = 'brown';
	shape= new Sprite(500, 100, 100, 100, 'd');
	shape.color = 'red';
	shape.rotationSpeed = 10;
	shape.vel.x = 0.5;
	platform_1 = new Sprite(200, 700, 1000, 5, 'k');
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('blue')
}

/*******************************************************/
//  END OF APP
/*******************************************************/