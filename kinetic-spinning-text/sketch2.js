function preload() {
    font = loadFont("cmunrm.ttf");
    image = loadImage("image.jpeg");
  }
  
  
  function setup() {
    // WEBGL Allows for 3D renderings
    createCanvas(800, 800, WEBGL);
    angleMode(DEGREES);
    image.resize(width, 0);
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
  
    // Image stuff
    let tilesX = 2;
    let tilesY = 1;
    let tileW = int(width / tilesX);
    let tileH = int(width / tilesY);
  
    /*
    for (let y = 0; y < tilesY; y++) {
      for (let x = 0; x < tilesX; x++) {
        
        // Offset
        let wave = sin(frameCount) * 100;
  
        // Source
        let sx = x * tileW + wave;
        let sy = y * tileH;
  
        // Destinations
        let dx = x * tileW;
        let dy = y * tileH;
  
        push();
        translate(0, 0, -200)
        copy(image, sx, sy, tileW, tileH, dx - width/2, dy - height/2, tileW, tileH);
        pop();
      }
    }
    */
  
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
  