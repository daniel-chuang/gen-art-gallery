// Generally following the tutorial by Tim Rodenbroeker
// https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/
// Written in p5.js instead of processing, with my own artistic twist

let pg;

function setup() {
  cnv = createCanvas(1000, 300);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2)
  pg = createGraphics(500, 150);

  // Sets the properties of the text
  pg.fill(255);
  pg.textFont("Helvetica");
  pg.textSize(150);
  pg.textAlign(CENTER, CENTER);
}

function draw() {
  // "Erases" everything each frame
  background(0);
  pg.background(0);
  
  // Changes the fill based off of mouse position
  pg.fill((sin(frameCount / 15) * 55) + 200, (sin(frameCount / 5) * 55) + 200, (sin(frameCount / 10) * 55) + 200)
  // pg.fill(255)

  // Creates the text at the center of the screen
  pg.push();
  pg.translate(pg.width/2, pg.height/2);
  pg.text("kinetic", 0, 0);
  pg.pop();

  // Experimental blur effect
  // pg.filter(BLUR, sin(frameCount/5) * 5);

  // BEGINNING OF KINETIC TEXT MODIFICATIONS
  // Creation of tiles
  let tilesX = 24;
  let tilesY = 15;
  let tileW = int(pg.width/tilesX);
  let tileH = int(pg.height/tilesY);

  // Image to canvas ratio
  let ratio = width/pg.width;

  // Iteration through tiles
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      
      // Warp factor
      //let waveX = sin(frameCount * 0.13 + (x * y) * 0.03 + mouseX) * 30 + (width/2 - mouseX * 1);
      let waveX = sin(frameCount * 0.2 + (x * y) * 0.03 + mouseX/60) * 30;
      let waveY = sin(frameCount * 0.2 + (x * y) * 0.03 - mouseX/60) * 20;

      // Source variables
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;

      // Destination variables
      let dx = x*tileW * ratio;
      let dy = y*tileH * ratio;
      
      copy(pg, sx, sy, tileW, tileH, dx, dy, tileW * ratio, tileH * ratio)
    }
  }
}
