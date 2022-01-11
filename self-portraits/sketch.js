// July 19, 2021
// "Self Portraits 0"

// ---------------------------

var img;
var cnv;
var imageCount = 0;

function preload() {
  img = loadImage("assets/portrait" + String(imageCount) + ".png");
}

/* 
function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.position((windowWidth - img.width) / 2, (windowHeight - img.height) / 2);
  for (let col = 0; col < img.width; col+=10) {
    for (let row = 0; row < img.height; row+=10) {
      let c = img.get(col, row)
      stroke(color(c));
      //fill(color(c))
      strokeWeight(8);
      point(col, row);
      //rect(col, row, 5, 5)
    }
  }
}
*/

function setup() {
  cnv = createCanvas(img.width*windowWidth/1200, img.height*windowWidth/1200);
  print(img.width, img.height);
  //cnv.position((windowWidth - img.width*windowWidth/1200) / 2, (windowHeight - img.height*windowHeight/1200) / 2);
  cnv.position((windowWidth - img.width*windowWidth/1200) / 2, (windowHeight - img.height*windowWidth/1200) / 2);
  scale(windowWidth/1200)
  image(img, 0, 0);
  for (let col = 0; col < img.width; col+=5) {
    for (let row = 0; row < img.height; row+=5) {
      let c = img.get(col, row);
      stroke(color(c));
      strokeWeight(random(5));
      noFill();
      curve(col, row, col + random(-20, 20), row + random(-20, 20), col + random(-20, 20), row + random(-20, 20), col + random(-20, 20), row + random(-20, 20));
    }
  }
  
  for (let col = 0; col < img.width; col+=13) {
    for (let row = 0; row < img.height; row+=13) {
      let c = img.get(col, row);
      stroke(color(c));
      strokeWeight(5);
      point(col, row);
      stroke(c[0] - 50, c[1] - 50, c[2] - 50);
      strokeWeight(3);
      point(col, row);
    }
  }
}


function draw() {
}

function mousePressed() {
  imageCount += 1;
  if (imageCount == 3) {
    imageCount = 0;
  }
  img = loadImage("assets/portrait" + String(imageCount) + ".png", setup);
}