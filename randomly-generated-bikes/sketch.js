// July 18, 2021
// "Randomly Generated Bikes"
// Steps followed from https://www.imotvoksim.com/post/generative-bicycles

// ---------------------------

var firstPressed = false;

let cnv;
function setup() {
  cnv = createCanvas(800, 800);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2)
  background(0);
  bike1 = new Bike(160, 300, 8/5, [0, 255, 0], 5);
  bike1.create()
  frameRate(2)
}

class Point {
  constructor(coords) {
    this.x = coords[0]
    this.y = coords[1]
    this.coords = coords
  }
}

class Bike {
  // x, y for the position of the bottom left wheel
  // scale, rotation for the size and rotation of the bike
  // scale is used in the scale function, and should generally be between 0 and 1
  // rotation is in degrees
  constructor(x, y, scale, color = [255, 255, 255], strokeWeight = 6) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.color = color;
    this.strokeWeight = strokeWeight;
  } 

  create() {
    // Start a new drawing state
    push();    

    // Variables
    let A = new Point([this.x, this.y]);              // A wheel
    let B = new Point([A.x + random(150, 200), A.y]); // A wheel
    let C = new Point([A.x + random(55, 90), A.y]);   // Between wheels (closer to A)
    let D = new Point([A.x + random(30, 40), A.y - random(50, 100)]); // Somewhere top-right of A
    let E = new Point(pointOnLine(C.coords, D.coords, random(A.x + 20, A.x + 30))); // Extended from line CD
    let F = new Point([B.x - random(20, 40), E.y + random(-20, 30)]); // Top-left of B
    let G = new Point([F.x + random(15, 30), F.y + random(0, 10)]); // Forms handlebars with F
    let H = new Point(pointOnLine(F.coords, B.coords, random(F.x + 8, F.x + 15))); // Point in the front bar;
    let I = new Point(pointOnLine(F.coords, B.coords, random(F.x + 3, F.x + 8))); // Point in the front bar;
    let J = new Point(pointOnLine(C.coords, E.coords, random(E.x + 10, E.x + 25)))  // point between C and E
    
    // Preset values
    strokeWeight(this.strokeWeight);
    stroke(this.color[0], this.color[1], this.color[2]);
    noFill();
    scale(this.scale);

    // Wheels
    let wheelSize = random(40, 70)
    circle(A.x, A.y, wheelSize);
    circle(B.x, B.y, wheelSize + random(-10, 10));

    // Lines in back of the bike
    line(A.x, A.y, C.x, C.y); // Line from A to C
    line(A.x, A.y, D.x, D.y); // Line from A to D
    line(C.x, C.y, E.x, E.y); //Line from C to E
    line(E.x - random(10, 20), E.y, E.x + random(10, 20), E.y); // Line with E as midpoint (Seat)

    // Lines in front of the bike
    line(B.x, B.y, F.x, F.y);
    line(F.x, F.y, G.x, G.y);

    // Lines between front and back of the bike
    line(C.x, C.y, H.x, H.y);
    line(J.x, J.y, I.x, I.y)
    
    // Reset drawing state and then rotate bike
    pop();
  }
}

function mouseClicked() {
  // Draws a bike on click
  background(0);
  bike1 = new Bike(160, 300, 8/5, [0, 255, 0], 5);
  bike1.create();
  firstPressed = true;
}

function draw() {
  push();
  translate(60, 300)
  // draw mouse button
  if (firstPressed == false) {
    strokeWeight(1);
    fill(0, 255, 0);
    rect(145, 100, 20, 30, 20);
    
    textSize(20);
    text("Click!", 175, 100 + 20)
    
    if (frameCount % 2 == 0) {
      fill(255, 255, 255);
    }
    else {
      fill(0, 255, 0);
    }
    rect(145, 100, 10, 15, 40, 0, 0, 0);
  }
  pop();
}

// This code is taken from https://editor.p5js.org/miskov.tomi/sketches/MPcr2OyLq
function pointOnLine(P1, P2, x) {
  //x = x coordinate of the new point
  //return [x, y] of the new point
  let y, point;
  let m = (P1[1] - P2[1]) / (P1[0] - P2[0]);
  let b = P2[1] - m * P2[0];
  y = m * x + b;
  point = [x, y];

  return point;
}
