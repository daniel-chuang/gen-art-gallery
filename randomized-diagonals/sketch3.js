var array;
var widthJ;
var heightI;

function setup() {
  // Setting up the rendering settings
  createCanvas(400, 400);
  frameRate(60);

  // Setting up the randomized array
  var tileCount = 20;
  heightI = round(height/tileCount);
  widthJ = round(width/tileCount);
  array = Array(heightI).fill(Array(widthJ).fill(3));

  // Creating the initial values for the array
  for (let i=0; i < height/heightI; i += 1) { // Iterating through the columns
    array[i] = [];
    for (let j=0; j < width/widthJ; j += 1) { // Iterating through the rows
      array[i][j] = int(random(0,2));
    }
  }  

  // Random Walk
  x_1 = 0;
  y_1 = 0;
}

function draw() {
  
  background(220);
  x_1 = constrain(x_1 + random([-1, 1]), 0, widthJ);
  y_1 = constrain(y_1 + random([-1, 1]), 0, heightI);

  // Creating/modifying the array
  for (let i=0; i < height/heightI; i += 1) { // Iterating through the columns
    for (let j=0; j < width/widthJ; j += 1) { // Iterating through the rows
      
      // Finding the actual pixel values
      x = widthJ * j;
      y = heightI * i;

      if (i == y_1 && j == x_1) {
        array[y_1][x_1] = int(random(0,2));
      }

      stroke(50 + 50*sin(frameCount/500), 50 + 50*sin(frameCount/170), 50 + 50*sin(frameCount/310));
      if (array[i][j] == 0) {
        strokeWeight(map(mouseX, 0, width, 0, 10));
        line(x, y, x+widthJ, y+heightI);
      }
      else if (array[i][j] == 1) {
        strokeWeight(map(mouseY, 0, height, 0, 10));
        line(x+widthJ, y, x, y+heightI);
      }
    }
  }
  console.log(array);
}
