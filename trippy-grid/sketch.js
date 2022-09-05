var bigStep = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  var centerpoints = [];
  for (let i = 0; i < windowWidth; i += bigStep) { 
    for (let j = 0; j < windowHeight; j += bigStep) {
      color(255);
      circle(i, j, 5);
      centerpoints.push([i, j])
    }
  }

  print(centerpoints)

  i_big = 250 * sin(frameCount / 80);
  for (let i = 0; i < windowWidth; i += 150) {
    if (i % bigStep == 0 && i != 0) {
      i_big += bigStep;
    }
    var j_big = 200 * sin(frameCount / 80);
    for (let j = 0; j < windowHeight; j += 10) {
      if (j % bigStep == 0 && j != 0) {
        j_big += bigStep;
      }
      stroke(255);
      line(i, j, i_big, j_big);
    }
  }

  i_big = 400 * cos(frameCount / 40);
  var i_offset = 5;
  for (let i = i_offset; i < windowWidth; i += 150) {
    if ((i - i_offset) % bigStep == 0 && i != 0) {
      i_big += bigStep;
    }
    var j_big = 170 * cos(frameCount / 200);
    for (let j = 0; j < windowHeight; j += 10) {
      if (j % bigStep == 0 && j != 0) {
        j_big += bigStep;
      }
      stroke(255);
      line(i, j, i_big, j_big);
    }
  }

  j_big = 200 + 50 * sin(frameCount / 80);
  for (let j = 0; j < windowHeight; j += 150) {
    if (j % bigStep == 0 && j != 0) {
      j_big += bigStep;
    }
    let i_big = 40 * cos(frameCount / (j * 20));
    for (let i = 0; i < windowWidth; i += 10) {
      if (i % bigStep == 0 && i != 0) {
        i_big += bigStep;
      }
      stroke(255);
      line(i, j, i_big, j_big);
    }
  }

  j_big = 100 + 100 * sin(frameCount / 50);
  var j_offset = 5;
  for (let j = j_offset; j < windowHeight; j += 150) {
    if ((j - j_offset) % bigStep == 0 && j != 0) {
      j_big += bigStep;
    }
    if (j % bigStep == 0 && j != 0) {
      j_big += bigStep;
    }
    let i_big = 15;
    for (let i = 0; i < windowWidth; i += 10) {
      if (i % bigStep == 0 && i != 0) {
        i_big += bigStep;
      }
      stroke(255);
      line(i, j, i_big, j_big);
    }
  }

}
