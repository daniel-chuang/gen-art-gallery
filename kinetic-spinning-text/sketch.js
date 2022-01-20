function preload() {
  font = loadFont("cmunrm.ttf");
  image = loadImage("image.jpeg");
}


function setup() {
  // WEBGL Allows for 3D renderings
  cnv = createCanvas(800, 800, WEBGL);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2)
  angleMode(DEGREES);
  image.resize(width, 0);
  
  // Setting up words
  words = ["Now", "Witness", "Kinetic", "Spinning", "Text", "in", "Action"];

  // Setting up styles
  textFont(font);
  cnv.textAlign(CENTER, TOP);
  cnv.textSize(80);
  cnv.fill(255);
}

function draw() {
  // Resetting the drawing state to a blank canvas at the beginning of each iteration
  cnv.background(0);

  // Drawing the text
  push();
  cnv.rotateY(frameCount/50 - 50);
  cnv.rotateX(frameCount/100);
  cnv.rotateZ(frameCount/200);
  for (let z = 8; z < 15; z++) {
    cnv.fill(255 - (z-8) * 12, sin(frameCount/1) * 130 + 125, 255 - abs(sin(frameCount/4) * 255));
    for (let i = 0; i < words.length; i++) {
      cnv.text(words[i], 0, (90 * i) - height / 2 + 80);
      cnv.rotateY(sin(frameCount/(z * 40)) * 10);
    }
  }
  cnv.filter(BLUR, 10);
  pop();


  // Image stuff
  let tilesX = 3;
  let tilesY = 3;
  let tileW = int(width / tilesX);
  let tileH = int(width / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      
      // Offset
      let waveX = sin(frameCount + (100 * x * y)) * 150;
      let waveY = cos(frameCount * 2 + (100 * x * y)) * 150;

      // Source
      let sx = x * tileW + waveX;
      let sy = y * tileH + waveY;

      // Destinations
      let dx = x * tileW;
      let dy = y * tileH;

      copy(cnv, sx, sy, tileW, tileH, dx - width/2, dy - height/2, tileW, tileH);
    }
  }

}
