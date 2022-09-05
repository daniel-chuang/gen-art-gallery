function setup() {
  // Rendering Settings
  createCanvas(400, 400);
  frameRate(30);

  // Setting initial parameters for the pendulum
  vx = 0;
  x = 90;
  theta = 0;
}

function draw() {
  // Partially clearing the canvas every time
  background(220, 50);

  // Pendulum Constants
  amplitude = 100;
  gravity = 0.05;

  // Translating drawings (so that the math is nicer)
  translate(width/2, height/4);

  // Drawing Origin
  circle(0, 0, 2, 2);

  // Calculating the drawing point mass
  x += vx;
  y = sqrt((amplitude ** 2) - (x ** 2)); // amplitude * cos(theta);
  theta = atan(y/x); // This is important to calculate gravity
  circle(x, y, 2, 2);

  // Applying acceleration
  // The force vector would be mgsinx
  // The acceleration would be gsinx
  // The velocity would increase by acceleration divided by the time interval
  if (theta > 0){
    vx -= gravity * cos(theta) * deltaTime;
  } else { // for theta < 0
    vx += gravity * cos(theta) * deltaTime;
  }
}
