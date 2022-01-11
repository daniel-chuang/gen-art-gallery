// Generally following the tutorial by Tim Rodenbroeker
// https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/
// Written in p5.js instead of processing, with my own artistic twist

let pg;

function setup() {
  createCanvas(500, 150);
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
  pg.translate(width/2, height/2);
  pg.text("daniel", 0, 0);
  pg.pop();

  // Experimental blur effect
  // pg.filter(BLUR, sin(frameCount/5) * 5);

  // BEGINNING OF KINETIC TEXT MODIFICATIONS
  // Creation of tiles
  let tilesX = 16;
  let tilesY = 12;
  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

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
      let dx = x*tileW;
      let dy = y*tileH;

      copy(pg, sx, sy, tileW, tileH, dx, dy, tileW, tileH)
    }
  }
}
