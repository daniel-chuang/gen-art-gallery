var array;
var tileCount = 35;
var widthJ;
var heightI;
var walkers;

function setup() {
  // Setting up the rendering settings
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  // Setting up the randomized array
  heightI = round(height/tileCount);
  widthJ = round(width/tileCount);
  array = Array(heightI).fill(Array(widthJ).fill(3));

  // Creating the initial values for the array
  for (let i=0; i < tileCount; i += 1) { // Iterating through the columns
    array[i] = [];
    for (let j=0; j < tileCount; j += 1) { // Iterating through the rows
      array[i][j] = int(random(0,2));
    }
  }  

  // Random Walk
  walkers = [];
  for (let k=0; k <= 50; k++) {
    walkers[k] = [int(random(0, tileCount)), int(random(0, tileCount))];
  }
}

function draw() {

  background(0);
  for (let k=0; k <= walkers.length - 1; k++) {
    console.log(walkers)
    walkers[k][0] = constrain(walkers[k][0] + random([-1, 1]), 0, tileCount);
    walkers[k][1] = constrain(walkers[k][1] + random([-1, 1]), 0, tileCount);
  }

  // Creating/modifying the array
  for (let i=0; i < tileCount; i += 1) { // Iterating through the columns
    for (let j=0; j < tileCount; j += 1) { // Iterating through the rows
      
      // Finding the actual pixel values
      x = widthJ * j;
      y = heightI * i;

      // Checking if for walkers
      for (let k=0; k <= walkers.length - 1; k++) {
        if (i == walkers[k][1] && j == walkers[k][0]) {
          array[i][j] = int(random(0,2));
        }
      }

      stroke(205 - 50*sin(frameCount/20));
      if (array[i][j] == 0) {
        strokeWeight(map(constrain(mouseX, 0, width), 0, width, 0, 12));
        line(x, y, x+widthJ, y+heightI);
        circle(x, y, 9 * sin(frameCount / 81))
      }
      else if (array[i][j] == 1) {
        stroke(815 + 50*sin(frameCount/40), 185 + 70*sin(frameCount/70), 185 + 70*sin(frameCount/20));
        strokeWeight(map(constrain(mouseY, 0, height), 0, height, 0, 12));
        line(x+widthJ, y, x, y+heightI);
        circle(x, y, 9 * sin(frameCount / 51))
      }
    }
  }
}
