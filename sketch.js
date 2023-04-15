function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
  createA("https://github.com/bastiloestacogido", "Mi cuenta de GitHub", "_blank").id("este");
  background(0);
}

function draw() {
  textAlign(CENTER, CENTER);
  textSize(25);
  text("🐺", mouseX, mouseY);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
