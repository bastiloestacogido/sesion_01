function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
  createA("https://…", "Mi cuenta de GitHub", "_blank").id("este");
  background(0);
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
