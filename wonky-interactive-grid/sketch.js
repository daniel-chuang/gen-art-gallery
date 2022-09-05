// Practice grid
/*
- Create a grid
- Calculate the angle from the unit to the mouse
- Draw a line accordingly to the angle
*/

var unitSize = 55;
var halfUnit = unitSize / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
}

function draw() {
  // Clearing the previous frame
  background(255);

  // For loop to draw the grid
  for (let gridY = 0; gridY * unitSize < height; gridY++) {
    for (let gridX = 0; gridX * unitSize < width; gridX++) {

      // Multiplying the iterator by the unit size to get the actual coordinate value
      let X = (gridX * unitSize) + halfUnit;
      let Y = (gridY * unitSize) + halfUnit;

      // Finding the angle between the unit and the mouse's coordinates
      let angle = atan((Y - mouseY) / (X - mouseX));
      let distance = dist(X, Y, mouseX, mouseY);
      let distanceScaled = map(distance, 0, width, 0.19, 1);

      // Calculating the change of X and Y according to the angle
      for (let i = 0; i < 15; i++) {
        angle += distanceScaled * PI / 10;
        strokeWeight(7 - i/7);

        // Rendering the line
        // line(X + deltaX, Y + deltaY, X - deltaX, Y - deltaY);
        push();
        translate(X, Y);
        rotate(angle);
        line(halfUnit, Y, - halfUnit, Y);
        pop();
      }
    }
  }
}

function dist(x1, y1, x2, y2) {
  return sqrt( (x1 - x2)**2 + (y1 - y2)**2 )
}