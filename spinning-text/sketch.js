function preload() {
  font = loadFont("cmunrm.ttf");
}


function setup() {
  // WEBGL Allows for 3D renderings
  cnv = createCanvas(800, 800, WEBGL);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  angleMode(DEGREES);
  background(0);
  
  // Setting up words
  words = ["Welcome", "to", "Daniel", "Chuang's", "Generative", "Art", "Gallery"];

  // Setting up styles
  textFont(font);
  textAlign(CENTER, TOP);
  textSize(80);
  fill(255);
}

function draw() {
  // Resetting the drawing state to a blank canvas at the beginning of each iteration
  background(0);

  // Drawing the text
  rotateY(frameCount - 50);
  rotateX(frameCount/5);
  rotateZ(frameCount/9);
  for (let z = 8; z < 50; z++) {
    fill(255 - (z-8) * 5);
    for (let i = 0; i < words.length; i++) {
      text(words[i], 0, (90 * i) - height / 2 + 80);
      rotateY(sin(frameCount/z) * 10);
    }
  }

}