// Array to store all circle objects in
var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initializing circles
  for (let i=0; i < 16; i++) {
    append(circles, new circleObject(randomGaussian(width/2, 300), randomGaussian(height/2, 300), random(10, 400), random([-1, 1]) * random(10, 120)));
  }

  background(0);
}

function draw() {
  // "Fading away" the previous frames
  fill(0, 0, 0, 30)
  noStroke();
  rect(0, 0, width, height);


  let points = []
  for (let i=0; i < circles.length; i++) {
    append(points, circles[i].getPoint(frameCount));
    circles[i].changeRadius(3 * sin(frameCount / 40));
    // circles[i].changeCoords((mouseX - width/2) * 0.05, (mouseY - height/2) * 0.05)
    circles[i].changeCoords(2 * sin(frameCount / 30), 2 * sin(frameCount / 30))
    circles[i].render(255, 1)
  }

  // Setting stroke weight for the lines
  strokeWeight(4);

  for (let i=0; i < points.length; i++) {
    for (let j=0; j < points.length; j++) {
      if (i != j) {
        stroke(230 + 105 * sin(frameCount / 60) - (4 * sin(frameCount / 100) * (i + j)), 230 + 55 * sin(frameCount / 50) - (7 * sin(frameCount / 70) * (i + j)), 230 + 25 * sin(frameCount / 40) - (10 * sin(frameCount / 60) * (i + j)), 20);
        line(points[i][0], points[i][1], points[j][0], points[j][1]);
      }
    }
  }
}

class circleObject {
  constructor(x, y, r, theta_div) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.theta_div = theta_div;
    this.randomness = random(-3, 3);
  }

  getPoint(theta) {
    let point_x = this.x + (this.r * cos(theta / this.theta_div));
    let point_y = this.y + (this.r * sin(theta / this.theta_div));
    print([typeof(theta_div), typeof(theta)])
    print([point_x, point_y])
    return ([point_x, point_y]);
  }

  changeRadius(dr) {
    this.r = constrain(this.r + (0.5 * this.randomness * dr) , 10, 400);
  }

  changeCoords(dx, dy) {
    this.x = constrain(this.x + dx * this.randomness, 50, width - 50);
    this.y = constrain(this.y + dy * this.randomness, 50, height - 50);
  }

  render(colored, weight) {
    if (colored == false) {
      noFill();
    } else {
      strokeWeight(weight);
      stroke(colored);
    }
    circle(this.x, this.y, this.r * 2)
  }
}