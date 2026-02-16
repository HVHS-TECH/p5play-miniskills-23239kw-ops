/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {

  imgBG   = loadImage('../assets/images/space.png');

  imgFace = loadImage('../assets/images/Face.png');

}

function setup() {
	console.log("setup: ");
	world.gravity.y = 5;
	cnv = new Canvas(1000, 1000);

	wallLH  = new Sprite(0, height/2, 10, height, 'k')
	wallRH  = new Sprite(height, height/2, 10, height, 'k');
	wallTop = new Sprite(height/2, 0, height, 10, 'k');
	wallBot = new Sprite(height/2, height, height, 10, 'k');

	Circle1 = new Sprite(200, 500, 200, 'd');
	Circle1.color = 'green';
	Circle1.bounciness = 0.5;
	Circle1.image = (imgFace);
	imgFace.resize(200, 200);

	goatMilk = new Sprite(width/2, 200, 50, 200, 'd');
	goatMilk.color = 'white';
	goatMilk.friction = 0

	platform_1 = new Sprite(200, 700, 1000, 5, 'k');
	platform_1.rotation = 10;

	randNumaliensize = random(1, 20);

	alienGroup = new Group();

	for (i = 0; i < 100; i++) {
    alien = new Sprite(width / 2, height / 2, randNumaliensize, randNumaliensize, 'd');
    alien.vel.x = random();
    alien.vel.y = random();
    alien.bounciness = 0.7;
    alien.friction = 5;
	alien.color = 'red';
    const VELARRAY = [-1, 1];
    randNum = random(4, 7) * random(VELARRAY);
	alienGroup.add(alien);

	}

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	alienGroup.collides(Circle1, func2Call);
	function func2Call(_ssss,_Circle1) {
	_ssss.remove();

	}
	background(imgBG);

	if (kb.pressing('left')) {

		goatMilk.vel.x = -10;

	}

	else if (kb.pressing ('right')) {

		goatMilk.vel.x = 10;

	};

	if (kb.released('left')) {

    	goatMilk.vel.x = 0;

	}

	if (mouse.presses()) {
		
		goatMilk.moveTo(goatMilk.x, 0, 5);

	}
	
	if (mouse.presses()) {
		
		alienGroup.moveTo(mouse.x, mouse.y, 5);

	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/