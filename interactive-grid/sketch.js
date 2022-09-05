// Practice grid
/*
- Create a grid
- Calculate the angle from the unit to the mouse
- Draw a line accordingly to the angle
*/

var unitSize = 55;
var halfUnit = unitSize / 2;
var amountLines = 1;
var lengthRatio = 1;
var lineStrokeWeight = 5;
var instructionsShow = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(lineStrokeWeight);
  textAlign(CENTER);
}

function draw() {
  // Clearing the previous frame
  background(255);

  // Setting the stroke weight
  strokeWeight(lineStrokeWeight);

  // For loop to draw the grid
  for (let gridY = 0; gridY * unitSize < height; gridY++) {
    for (let gridX = 0; gridX * unitSize < width; gridX++) {

      // Multiplying the iterator by the unit size to get the actual coordinate value
      let X = (gridX * unitSize) + halfUnit;
      let Y = (gridY * unitSize) + halfUnit;

      // Finding the angle between the unit and the mouse's coordinates
      let angle = atan((Y - mouseY) / (X - mouseX));
      let distance = dist(X, Y, mouseX, mouseY);
      let distanceScaled = map(distance, 0, width, 0.05, 1);
      // angle += distanceScaled * PI;
      // text(str(round(angle, 1)), X, Y);

      // Drawing multiple lines for the SWAG
      for (let i = 0; i < amountLines; i++) {
        angle += distanceScaled * PI / 2;

        // Calculating the change of X and Y according to the angle
        let deltaX = halfUnit * cos(angle) * (lengthRatio - distanceScaled);
        let deltaY = halfUnit * sin(angle) * (lengthRatio - distanceScaled);

        // Rendering the line
        line(X + deltaX, Y + deltaY, X - deltaX, Y - deltaY);
      }
    }
  }

    // Giving instructions
  if (frameCount < 100) {
    fill(0);
    translate(width / 2, height / 2);
    rect(-220, -50, 440, 100);
    fill(255);
    textSize(20);
    text("Interact using mouse button and arrow keys", 0, 0)
  } 
}

function mouseReleased() {
  amountLines += 1;
  if (amountLines == 8) {
    amountLines = 1;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    lengthRatio += 0.5;
  }
  if (keyCode === LEFT_ARROW) {
    lengthRatio -= 0.5;
  }
  if (keyCode === UP_ARROW) {
    if (lineStrokeWeight < 10) {
      lineStrokeWeight += 1;
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (lineStrokeWeight > 1) {
      lineStrokeWeight -= 1;
    }
  }
}

function dist(x1, y1, x2, y2) {
  return sqrt( (x1 - x2)**2 + (y1 - y2)**2 )
}