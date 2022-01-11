// Month DD, YYYY
// "Spinning Circles"
// Move mouse around to interact with the sketch. 

// ---------------------------

var cnv;
var count = 36;

function setup() {
  angleMode(DEGREES)
  cnv = createCanvas(constrain(windowWidth, 0, 1000), constrain(windowHeight, 0, 1000));
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  colorMode(HSB, 360, width, height); // Using HSB Colorspace with width and height as params so we don't need to remap mouse position values.
  noStroke();
  frameRate(30);
  noCursor();
}

function draw() {
  if (mouseIsPressed) {
    frameRate(60);
  } else {
    frameRate(30);
  }
  
  background(360, 0, 0); // Sets the background as white in our new colorspace
  fill(255);
  
  let stepX = 100;
  let stepY = 100;
  for (let x = round(stepX / 2); x < width + stepX; x += stepX) {
    for (let y = round(stepY / 2); y < height + stepY; y += stepY) {
      push();
      translate(-width / 2 * 0.1, -height / 2 * 0.1)
      circ = new circle1(x + ((mouseX - x) * 0.1), y + ((mouseY - y) * 0.1), count, 10, 80);
      circ.draw()
      pop();
    }
    
  circ = new circle2(mouseX, mouseY, 10, width * mouseY / height, 0.1)
  circ.draw()
  }

  
  count = constrain(round(constrain(mouseX, 0, width) / 50), 3, 10);
}

class circle1 {
  constructor(x, y, count, rotateRate, diameter, alpha) { // rotateRate refers to degrees / frame
    this.x = x;
    this.y = y;
    this.count = count;
    this.rotateRate = rotateRate;
    this.diameter = diameter;
    this.alpha = alpha;
  }
  
  draw() {
    var angleStep = round(360 / count);
    strokeWeight(0);
    for (let i = 0; i <= 360; i+=angleStep) {
      fill(i, width, height - 4 * dist(mouseX + width / 2 * 0.2 / 4, mouseY + height / 2 * 0.2 / 4, this.x, this.y) * mouseY / height, this.alpha);
      arc(this.x, this.y, this.diameter, this.diameter, i-1 + this.rotateRate * frameCount, i+angleStep + this.rotateRate * frameCount, PIE);

    }
  }
}

class circle2 {
  constructor(x, y, rotateRate, diameter, alpha) { // rotateRate refers to degrees / frame
    this.x = x;
    this.y = y;
    this.rotateRate = rotateRate;
    this.diameter = diameter;
    this.alpha = alpha;
  }
  
  draw() {
    var angleStep = 2;
    strokeWeight(0);
    for (let i = 0; i <= 360; i+=angleStep) {
      fill(0, 0, height, this.alpha * i * 0.005);
      arc(this.x, this.y, this.diameter, this.diameter, i + this.rotateRate * frameCount, i+angleStep + this.rotateRate * frameCount, PIE);

    }
  }
}