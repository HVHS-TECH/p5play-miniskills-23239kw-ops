/*******************************************************/
// P5.play: t23_display_text
// 
// Written by ???
/*******************************************************/
    
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(windowWidth, windowHeight);
}
    
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

    background('black');

    let totalSeconds = Math.floor(millis() / 1000);

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

     if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

     let timer = minutes + ":" + seconds;

    textAlign(CENTER, CENTER);
    textSize(800);
    fill('white');
    stroke('gray');
    strokeWeight(2);

    text(timer, width / 2, height / 2);
}

/*******************************************************/
//  END OF APP
/*******************************************************/