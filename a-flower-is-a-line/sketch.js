// July 17, 2021
// "A Flower is a Line"
// Inspired by "Articulating Arm"

// ---------------------------

var angle = 0;
var angleDirection = -1;
var speed = 0.3;
var totalIters = 200;
var cnv;

function setup() {
  cnv = createCanvas(500, 500);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2)
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //text(angle, 5, 20); // prints the current angle of rotation
  
  translate(width/2, height/2);

  push();

  for (var iters = 0; iters < totalIters; iters++) {
    stroke(iters * 1, 255 - (iters * 1), 100);
    translate(1.5 * iters, 0);
    rotate(angle);
    strokeWeight(12 - ((12 / totalIters) * iters));
    line(0, 0, 40 - ((40 / totalIters) * iters), 0);
  }

  angle += speed * angleDirection;
  if ((angle > 360) || (angle < 0)) {
    angleDirection *= -1;
  }

  pop();
  
  // draws a border square
  noFill();
  strokeWeight(6);
  stroke(0);
  translate(- width / 2, - height / 2);
  rect(3, 3, width - 6, height - 6);
  stroke(5);
}