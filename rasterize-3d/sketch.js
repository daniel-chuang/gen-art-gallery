let rowStep = 4;
let colStep = 4;
var color_i_avg;

function preload() {
  // Preloading an image
  num = String(round(random(3.51, 15.499)));
  console.log(num)
  img = loadImage(`assets/image${num}.jpg`);
  font = loadFont("SourceSansPro-Light.otf")
}

function setup() {
  // WebGL allows for 3d renderings
  img.resize(0, window.innerHeight * (19/40));
  createCanvas(img.width * 2, img.height * 2, WEBGL);
  angleMode(DEGREES);

  // Creating sliders for user input
  yRotationSlider = createSlider(-4, 4, 0, 0.5);
  xRotationSlider = createSlider(-4, 4, 0, 0.5);
  zRotationSlider = createSlider(-4, 4, 0, 0.5);
  dxRotationSlider = createSlider(-20, 20, 0, 0.5);
  dyRotationSlider = createSlider(-20, 20, 0, 0.5);
  dzRotationSlider = createSlider(-20, 20, 0, 0.5);
  scaleSlider = createSlider(0.2, 3, 1, 0.1);
  
  textAlign(CENTER);
  textFont(font);
  textSize(20)
  stroke(255, 255, 255);
  fill(255);
}

function draw() {
  background(0);
  
  if (frameCount < 120) {
    text("PLEASE USE THE SLIDERS", 0, height/2 - 20);
  }
  
  rotateX(frameCount * xRotationSlider.value());
  rotateY(frameCount * yRotationSlider.value());
  rotateZ(frameCount * zRotationSlider.value());

  // Iterating through the image, making a sphere at each iteration of steps
  for (var row = 0; row < img.height; row += rowStep) {
    for (let col = 0; col < img.width; col += colStep) {
      color_i_avg = 255 - average(img.get(col, row));
      push();
      translate((col - width/4) * scaleSlider.value(), (row - height/4) * scaleSlider.value(), (color_i_avg-126) * 1.5);
      //scale(scaleSlider.value());
      sphere(1, 1, 1);
      pop();
    }
    rotateX((frameCount/1000) * dxRotationSlider.value());
    rotateY((frameCount/1000) * dyRotationSlider.value());
    rotateZ((frameCount/1000) * dzRotationSlider.value());
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

function resetAll() {
  frameCount = 0
  yRotationSlider = createSlider(-4, 4, 0, 0.5)
  xRotationSlider = createSlider(-4, 4, 0, 0.5)
  zRotationSlider = createSlider(-4, 4, 0, 0.5)
  dxRotationSlider = createSlider(-20, 20, 0, 0.5)
  dyRotationSlider = createSlider(-20, 20, 0, 0.5)
  dzRotationSlider = createSlider(-20, 20, 0, 0.5)
}