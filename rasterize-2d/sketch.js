let img;
let step = 7;
var color;

function preload() {
  img = loadImage("assets/woman.jpg");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2)
  print(img.width, img.height);
  noStroke();
}

function draw() {
  background(0);
  let frameScale = 0.7 + (0.5 * sin(frameCount / 10))

  for (let col = 0; col < img.width; col+=step) {
    for (let row = 0; row < img.height; row+=step) {
      color = img.get(col, row);
      fill(255, 255, 255);
      //fill(color);
      var squareSize = 1 - map(average(color), 0, 100, 0, 1) * frameScale;
      square(col, row, squareSize * step/2);
    }
  }
}

function average(lst) {
  // Takes a list and return the average value of that list
  var sum = 0;
  for (let i = 0; i < lst.length; i+=1) {
    sum += lst[i];
  }
  return sum/lst.length;
}