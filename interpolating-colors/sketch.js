// July 28, 21
// "Interpolating Colors" 

// ---------------------------
var tileCountYMax = 20;
var colLeft;
var colRight;

function setup() {
  colorMode(HSB);
  cnv = createCanvas(windowWidth, windowHeight);

  colLeft = chooseColorList(tileCountYMax, 0, 60, 0, 100, 90, 100);
  colRight = chooseColorList(tileCountYMax, map(constrain(mouseX, 0, width), 0, width, 0, 300), map(constrain(mouseX, 0, width), 0, width, 60, 360), 90, 100, 0, 100);
  print(colLeft, colRight);
}

function draw() {
  // Clearing the screen
  clear();

  // Setting Stroke
  noStroke();

  // Calculating tiles and tile sizes
  let tileCountX = int(map(mouseX, 0, width, 1, 80));
  let tileCountY = int(map(mouseY, 0, height, 1, 20));
  let tileWidthX = width / tileCountX;
  let tileWidthY = height / tileCountY;

  for (let gridY = 0; gridY < tileCountY; gridY++) {
    let blockLeft = colLeft[gridY];
    let blockRight = colRight[gridY];

    for (let gridX = 0; gridX < tileCountX; gridX++) {
      // Defines the coordinate positions of the current block
      let posX = tileWidthX * gridX;
      let posY = tileWidthY * gridY;

      let amount = map(posX, 0, width - 1, 0, 1); // this is the ratio of the current x iter in porportion to the range

      //fill(map(posX, 0, width, 0, 360), map(posY, 0, height, 100, 100), 100);
      fill(lerpColor(blockLeft, blockRight, amount));

      rect(posX, posY, tileWidthX + 1, tileWidthY + 1);

      /*
      if (random([0, 1]) == 0) {
        rect(posX, posY, tileWidthX + 1, tileWidthY + 1);
      }
      */
    } 
  }
}

function mousePressed() {
  colLeft = chooseColorList(tileCountYMax, map(constrain(mouseY, 0, height), 0, height, 0, 300), map(constrain(mouseY, 0, height), 0, height, 60, 360), 0, 100, 90, 100);
  colRight = chooseColorList(tileCountYMax, map(constrain(mouseX, 0, width), 0, width, 0, 300), map(constrain(mouseX, 0, width), 0, width, 60, 360), 90, 100, 0, 100);
}

function chooseColorList(len, start_hue, end_hue, start_sat, end_start, start_bright, end_bright) {
  let lst = [];
  for (let i = 0; i < len - 1; i++) {
    lst[i] = color(random(start_hue, end_hue), random(start_sat, end_start), random(start_bright, end_bright));
  }

  return lst;
}