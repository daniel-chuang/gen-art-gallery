// July 20, 2021
// "Disintegration Art"
// Continuation of yesterdays algorithm, but with animations and colored images.

// ---------------------------

var img;
var cnv;
var imageCount = 0;
var frameMod;
var frame = 0;
var imgList;

function preload() {
  var img0 = loadImage("assets/image0.png");
  var img1 = loadImage("assets/image1.png");
  var img2 = loadImage("assets/image2.png");
  var img3 = loadImage("assets/image3.png");
  var img4 = loadImage("assets/image4.png");
  imgList = [img0, img1, img2, img3, img4];
  img = imgList[String(imageCount)];
  
}

/* 
function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.position((windowWidth - img.width) / 2, (windowHeight - img.height) / 2);
  for (let col = 0; col < img.width; col+=10) {
    for (let row = 0; row < img.height; row+=10) {
      let c = img.get(col, row);
      stroke(color(c));
      //fill(color(c));
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
}


function draw() {
  scale(windowWidth/1200)
  frame += 1;
  frameMod = (((frame / 3) % 17) ** 2.07);
  /*
  if (frameMod < 1/30) {
    image(imgList[String(imageCount)], 0, 0);
  } */
  let frameModColor = frameMod / 1.2;
  let constant = 0;
  let s = 8;
  if (frameMod < 0.5) {
    let s = 8;
  } else if (frameMod < 2) {
    let s = 10;
  } else if (frameMod < 5) {
    let s = 13; }
  for (let col = 0; col < img.width; col+=s) {
    for (let row = 0; row < img.height; row+=s) {
      let c = img.get(col, row);
      stroke(c[0] - frameModColor, c[1] - frameModColor, c[2] - frameModColor);
      strokeWeight(random(5));
      noFill();
      curve(col, row, col + random(-frameMod - constant, frameMod + constant), row + random(-frameMod - constant, frameMod + constant), col + random(-frameMod - constant, frameMod + constant), row + random(-frameMod - constant, frameMod + constant), col + random(-frameMod - constant, frameMod + constant), row + random(-frameMod - constant, frameMod + constant));
    }
  }
  
  for (let col = 0; col < img.width; col+=21) {
    for (let row = 0; row < img.height; row+=21) {
      let c = img.get(col, row);
      stroke(0);
      strokeWeight(3);
      point(col, row);
    }
  }
}

function mousePressed() {
  imageCount += 1;
  if (imageCount == imgList.length) {
    imageCount = 0;
  }
  img = imgList[String(imageCount)]
  setup();
  frame = 0;
}