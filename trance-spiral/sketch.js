function setup() {
  cnv = createCanvas(900, 900);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2)
  background(0);
}

function draw() {
  // Resetting the background
  background(0);
  
  // Initializing variables
  let distance = 5;
  let d_distance = abs(50 * cos(frameCount * 0.002) * sin(frameCount * 0.001)) - 10;
  let angle = 0;
  let d_angle = frameCount * 0.002
  let d_d_angle = 1 * sin(frameCount / 50);
  let iters = abs(200 * sin(frameCount * 0.023)) + 5;
  
  // Creating an array to store points of the spiral
  let points = [];

  // Calculating all points of the fibonacci spiral
  for (let iter=0; iter<iters; iter++) {
    distance += d_distance;
    angle += d_angle;

    let x = distance * cos(angle);
    let y = distance * sin(angle);

    points.push([x, y]);
  }

  // Rendering the points
  stroke(255);
  translate(width/2, height/2);
  rotate(sin(frameCount * 0.001) * 360);
  for (let i=0; i<points.length-1; i++) {
    rotate(d_d_angle);
    stroke((200 * sin(frameCount * 0.02)) + (i * 3), 220 + (25 * sin(frameCount * 0.05)) - (i * 0.5), 200 - (1.3 * i) + (55 * sin(frameCount * 0.01)))
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
}
