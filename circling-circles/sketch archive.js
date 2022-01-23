function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(255, 255, 255, 4);
  noStroke();
  rect(0, 0, width, height);

  stroke(0);
  strokeWeight(4);
  let circle1 = new circleObject(width / 2 + (40 * cos(frameCount / 31)), height / 2 + (30 * cos(frameCount / 63)), 200);
  let [x_1, y_1] = circle1.getPoint(frameCount / 17);

  let circle2 = new circleObject(mouseX, mouseY, 100 + (40 * cos(frameCount / 100)));
  let [x_2, y_2] = circle2.getPoint(frameCount / 5);

  let circle3 = new circleObject(mouseY, width - mouseX, 40 + (40 * cos(frameCount / 20)));
  let [x_3, y_3] = circle3.getPoint(frameCount / 5);

  line(x_1, y_1, x_2, y_2);
  line(x_1, y_1, x_3, y_3);
  line(x_2, y_2, x_3, y_3);
}

class circleObject {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  getPoint(theta) {
    let point_x = this.x + (this.r * cos(theta));
    let point_y = this.y + (this.r * sin(theta));
    return ([point_x, point_y]);
  }

  render(filled) {
    if (filled == false) {
      noFill();
    } else {
      fill(filled);
    }
    circle(this.x, this.y, this.r * 2)
  }
}