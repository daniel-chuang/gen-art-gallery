function preload() {
  font = loadFont("cmunrm.ttf");
  image = loadImage("image.jpeg");
}


function setup() {
  // WEBGL Allows for 3D renderings
  pg = createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  image.resize(width, 0);
  
  // Setting up words
  words = ["Now", "Witness", "Kinetic", "Spinning", "Text", "in", "Action"];

  // Setting up styles
  textFont(font);
  pg.textAlign(CENTER, TOP);
  pg.textSize(80);
  pg.fill(255);
}

function draw() {
  // Resetting the drawing state to a blank canvas at the beginning of each iteration
  pg.background(0);

  // Drawing the text
  push();
  pg.rotateY(frameCount/50 - 50);
  pg.rotateX(frameCount/100);
  pg.rotateZ(frameCount/200);
  for (let z = 8; z < 15; z++) {
    pg.fill(255 - (z-8) * 12, sin(frameCount/1) * 130 + 125, 255 - abs(sin(frameCount/4) * 255));
    for (let i = 0; i < words.length; i++) {
      pg.text(words[i], 0, (90 * i) - height / 2 + 80);
      pg.rotateY(sin(frameCount/(z * 40)) * 10);
    }
  }
  pg.filter(BLUR, 10);
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

      copy(pg, sx, sy, tileW, tileH, dx - width/2, dy - height/2, tileW, tileH);
    }
  }

}
