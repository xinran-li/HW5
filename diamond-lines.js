# HW5
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
for (var i = 10; i < 200; i = i + 10) {
    line(width/2-i, i, width/2+i, i);
}
  for (var i = 10; i >= 200; i = i + 10) {
    line(i, i, width-i, i);
}

}
