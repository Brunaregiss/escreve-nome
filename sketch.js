let drawing = false;

function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  if (drawing) {
    stroke(0);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}
