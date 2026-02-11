/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	world.gravity.y = 5;
	cnv = new Canvas(1000, 1000);

	wallLH  = new Sprite(0, height/2, 10, height, 'k')
	wallRH  = new Sprite(height, height/2, 10, height, 'k');
	wallTop = new Sprite(height/2, 0, height, 10, 'k');
	wallBot = new Sprite(height/2, height, height, 10, 'k');

	Jcole = new Sprite(250, 200, 200, 500, 'd');
	Jcole.color = 'brown';
	Circle1 = new Sprite(200, 500, 200, 'd');
	Circle1.color = 'red';
	Circle1.bounciness = 1;
	shape= new Sprite(500, 100, 100, 100, 'd');
	shape.color = 'red';
	shape.rotationSpeed = 10;
	shape.vel.x = 0.5;
	shape.bounciness = 1;
	Jcole.bounciness = 1;
	
	platform_1 = new Sprite(200, 700, 1000, 5, 'k');
	platform_1.rotation = 10;

	randNumaliensize = random(1, 20);

	for (i = 0; i < 100; i++) {
    alien = new Sprite(width / 2, height / 2, randNumaliensize, randNumaliensize, 'd');
    alien.vel.x = random();
    alien.vel.y = random();
    alien.bounciness = 0.7;
    alien.friction = 5;
	alien.color = 'red';
    const VELARRAY = [-1, 1];
    randNum = random(4, 7) * random(VELARRAY);

	}

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