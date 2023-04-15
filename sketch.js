function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    createA("https://github.com/bastiloestacogido", "Mi cuenta de GitHub", "_blank").id("button");
}

function draw() {
    frameRate(30);
    textSize(10);
    text("🐺",random(0,windowWidth),random(0,windowHeight));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
