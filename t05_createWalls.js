/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	world.gravity.y = 5;
	cnv = new Canvas(1000, 1000);

	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(1000, 500, 10, 1000, 'k');
	wallTop = new Sprite(500, 0, 1000, 10, 'k');
	wallBot = new Sprite(500, 1000, 1000, 10, 'k');

	Jcole = new Sprite(250, 200, 200, 500, 'd');
	Jcole.color = 'brown';
	Circle1 = new Sprite(200, 500, 200, 'd');
	Circle1.color = 'red';
	Circle1.bounciness = 100;
	shape= new Sprite(500, 100, 100, 100, 'd');
	shape.color = 'red';
	shape.rotationSpeed = 10;
	shape.vel.x = 0.5;
	shape.bounciness = 100;
	Jcole.bounciness = 100;
	
	platform_1 = new Sprite(200, 700, 1000, 5, 'k');
	platform_1.rotation = 3;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('white')
}

/*******************************************************/
//  END OF APP
/*******************************************************/